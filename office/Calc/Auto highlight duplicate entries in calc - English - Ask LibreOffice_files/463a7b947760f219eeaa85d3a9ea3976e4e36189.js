(function() {
  if ('require' in window) {
    require("discourse/lib/theme-settings-store").registerSettings(2, {"linked_words":"/#fd([0-9]+)\\b/,https://bugs.libreoffice.org/show_bug.cgi?id=$1|/\\bfdo#([0-9]+)\\b/,https://bugs.libreoffice.org/show_bug.cgi?id=$1|/\\bblo#([0-9]+)\\b/,https://bugs.libreoffice.org/show_bug.cgi?id=$1|/\\btdf#([0-9]+)\\b/,https://bugs.documentfoundation.org/show_bug.cgi?id=$1|/\\brdm#([0-9]+)\\b/,https://redmine.documentfoundation.org/issues/$1","excluded_tags":"code|pre","excluded_classes":"onebox"});
  }
})();
if ('define' in window) {
define("discourse/theme-2/discourse-linkify/initializers/initialize-discourse-linkify", ["exports", "discourse/lib/plugin-api", "../lib/utilities"], function (_exports, _pluginApi, _utilities) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var settings = require("discourse/lib/theme-settings-store").getObjectForTheme(2);

  var themePrefix = function themePrefix(key) {
    return "theme_translations.2.".concat(key);
  };

  var _default = {
    name: "discourse-linkify-initializer",
    initialize: function initialize() {
      (0, _pluginApi.withPluginApi)("0.8.7", function (api) {
        // roughly guided by https://stackoverflow.com/questions/8949445/javascript-bookmarklet-to-replace-text-with-a-link
        var skipTags = {
          a: 1,
          iframe: 1
        };
        settings.excluded_tags.split("|").forEach(function (tag) {
          tag = tag.trim().toLowerCase();

          if (tag !== "") {
            skipTags[tag] = 1;
          }
        });
        var skipClasses = {};
        settings.excluded_classes.split("|").forEach(function (cls) {
          cls = cls.trim().toLowerCase();

          if (cls !== "") {
            skipClasses[cls] = 1;
          }
        });

        var createLink = function createLink(text, url) {
          var link = document.createElement("a");
          link.innerHTML = text;
          link.href = url;
          link.rel = "nofollow";
          link.target = "_blank";
          link.className = "linkify-word no-track-link";
          return link;
        };

        var Action = function Action(inputListName, method) {
          this.inputListName = inputListName;
          this.createNode = method;
          this.inputs = {};
        };

        var linkify = new Action("linked_words", createLink);
        var actions = [linkify];
        actions.forEach(_utilities.readInputList);
        api.decorateCookedElement(function (element) {
          actions.forEach(function (action) {
            if (Object.keys(action.inputs).length > 0) {
              (0, _utilities.traverseNodes)(element, action, skipTags, skipClasses);
            }
          });
        }, {
          id: "linkify-words-theme"
        });
      });
    }
  };
  _exports.default = _default;
});
}

if ('define' in window) {
define("discourse/theme-2/discourse-linkify/lib/utilities", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.traverseNodes = _exports.readInputList = void 0;

  function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

  var settings = require("discourse/lib/theme-settings-store").getObjectForTheme(2);

  var themePrefix = function themePrefix(key) {
    return "theme_translations.2.".concat(key);
  };

  var readInputList = function readInputList(action) {
    if (settings[action.inputListName].trim() === "") {
      return;
    }

    settings[action.inputListName].split("|").forEach(function (pair) {
      if (!pair.includes(",")) {
        return;
      }

      var split = pair.split(",");
      var value = split.pop().trim(); // We want to allow commas in regexes

      var word = split.join(",").trim();

      if (value === "" || word === "") {
        return;
      }

      action.inputs[word] = value;
    });
  }; // Detect this pattern: /regex/modifiers


  _exports.readInputList = readInputList;

  var isInputRegex = function isInputRegex(input) {
    if (input[0] === "/" && input.split("/").length > 2) {
      return true;
    } else {
      return false;
    }
  };

  var escapeRegExp = function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  };

  var prepareRegex = function prepareRegex(input) {
    var leftWordBoundary = "(\\s|[:.;,!?…\\([{]|^)";
    var rightWordBoundary = "(?=[:.;,!?…\\]})]|\\s|$)";
    var wordOrRegex, modifier, regex;

    if (isInputRegex(input)) {
      var tmp = input.split("/");
      modifier = tmp.pop();
      wordOrRegex = tmp.slice(1).join("/"); // Allow only "i" modifier for now, global modifier is implicit

      if (modifier.includes("i")) {
        modifier = "ig";
      } else {
        modifier = "g";
      }
    } else {
      // Input is a case-insensitive WORD
      // Autolink only first occurrence of the word in paragraph,
      // i.e. do not use global modifier here
      modifier = "i";
      wordOrRegex = escapeRegExp(input);
    }

    try {
      regex = new RegExp(leftWordBoundary + "(" + wordOrRegex + ")" + rightWordBoundary, modifier);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("ERROR from auto-linkify theme: Invalid input:", wordOrRegex, err.message);
      return;
    }

    return regex;
  };

  var executeRegex = function executeRegex(regex, str, value, matches) {
    if (!_instanceof(regex, RegExp)) {
      return;
    }

    var match = regex.exec(str);

    if (match === null) {
      return;
    }

    do {
      // This is ugly, but we need the matched word and corresponding value together
      match.value = value;
      matches.push(match);
    } while (regex.global && (match = regex.exec(str)) !== null);
  };

  var replaceCapturedVariables = function replaceCapturedVariables(input, match) {
    // Did we capture user defined variables?
    // By default, we capture 2 vars: left boundary and the regex itself
    if (match.length <= 3) {
      return input;
    }

    var captured = match.slice(3, match.length);
    var replaced = input;

    for (var i = captured.length; i > 0; i--) {
      var re = new RegExp("\\$" + i.toString(), "");
      replaced = replaced.replace(re, captured[i - 1]);
    }

    return replaced;
  };

  var modifyText = function modifyText(text, action) {
    var words = action.inputs;
    var inputRegexes = Object.keys(words).filter(isInputRegex); // sort words longest first

    var sortedWords = Object.keys(words).filter(function (x) {
      return !isInputRegex(x);
    }).sort(function (x, y) {
      return y.length - x.length;
    }); // First match regexes in the original order, then words longest first

    var keys = inputRegexes.concat(sortedWords);
    var matches = [];

    for (var i = 0; i < keys.length; i++) {
      var word = keys[i];
      var value = words[word];
      var regex = prepareRegex(word);
      executeRegex(regex, text.data, value, matches);
    } // Sort matches according to index, descending order
    // Got to work backwards not to muck up string


    var sortedMatches = matches.sort(function (m, n) {
      return n.index - m.index;
    });

    for (var _i = 0; _i < sortedMatches.length; _i++) {
      var match = sortedMatches[_i];
      var matchedLeftBoundary = match[1];
      var matchedWord = match[2];

      var _value = replaceCapturedVariables(match.value, match); // We need to protect against multiple matches of the same word or phrase


      if (match.index + matchedLeftBoundary.length + matchedWord.length > text.data.length) {
        continue;
      }

      text.splitText(match.index + matchedLeftBoundary.length);
      text.nextSibling.splitText(matchedWord.length);
      text.parentNode.replaceChild(action.createNode(matchedWord, _value), text.nextSibling);
    }
  };

  var isSkippedClass = function isSkippedClass(classes, skipClasses) {
    // Return true if at least one of the classes should be skipped
    return classes && classes.split(" ").some(function (cls) {
      return cls in skipClasses;
    });
  };

  var traverseNodes = function traverseNodes(elem, action, skipTags, skipClasses) {
    // work backwards so changes do not break iteration
    for (var i = elem.childNodes.length - 1; i >= 0; i--) {
      var child = elem.childNodes[i];

      if (child.nodeType === 1) {
        var tag = child.nodeName.toLowerCase();
        var cls = child.getAttribute("class");

        if (!(tag in skipTags) && !isSkippedClass(cls, skipClasses)) {
          traverseNodes(child, action, skipTags, skipClasses);
        }
      } else if (child.nodeType === 3) {
        modifyText(child, action);
      }
    }
  };

  _exports.traverseNodes = traverseNodes;
});
}

