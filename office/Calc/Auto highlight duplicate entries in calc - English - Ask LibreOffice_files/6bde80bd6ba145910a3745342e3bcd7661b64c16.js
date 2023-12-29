(function() {
  if ('require' in window) {
    require("discourse/lib/theme-settings-store").registerSettings(3, {"host_url":"matomo.documentfoundation.org","website_id":"55","exclude_groups":"","user_id_tracking":"","subdomain_tracking":false,"do_not_track":false,"disable_cookies":false});
  }
})();
if ('define' in window) {
define("discourse/theme-3/initializers/theme-field-4-common-html-script-1", ["exports", "discourse/lib/plugin-api"], function (_exports, _pluginApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var settings = require("discourse/lib/theme-settings-store").getObjectForTheme(3);

  var themePrefix = function themePrefix(key) {
    return "theme_translations.3.".concat(key);
  };

  var _default = {
    name: "theme-field-4-common-html-script-1",
    after: "inject-objects",
    initialize: function initialize() {
      (0, _pluginApi.withPluginApi)("0.2", function (api) {
        api.onPageChange(function (url, title) {
          var currentUser = api.getCurrentUser();

          if (settings.exclude_groups.trim() && currentUser) {
            var excludedGroups = settings.exclude_groups.split(",").map(function (g) {
              return g.trim();
            });
            var currentUserGroups = currentUser.groups.map(function (g) {
              return g.name;
            });

            if (excludedGroups.filter(function (g) {
              return currentUserGroups.includes(g);
            }).length) {
              return;
            }
          }

          window._paq = window._paq || [];
          window._paq_loaded = window._paq_loaded || false;

          if (!_paq_loaded) {
            var u = "//".concat(settings.host_url, "/");

            _paq.push(['setTrackerUrl', u + 'piwik.php']);

            _paq.push(['setSiteId', settings.website_id]);

            var d = document,
                g = d.createElement('script'),
                s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript';
            g.async = true;
            g.defer = true;
            g.src = u + 'piwik.js';
            s.parentNode.insertBefore(g, s);
            _paq_loaded = true;
          }

          var userIdField = settings.user_id_tracking.trim();

          if (userIdField && currentUser && currentUser[userIdField]) {
            _paq.push(['setUserId', currentUser[userIdField]]);
          }

          if (settings.subdomain_tracking) {
            var allDomains = "*" + document.domain.substring(document.domain.indexOf("."));

            _paq.push(["setCookieDomain", allDomains]);

            _paq.push(["setDomains", allDomains]);
          }

          if (settings.do_not_track) {
            _paq.push(["setDoNotTrack", true]);
          }

          if (settings.disable_cookies) {
            _paq.push(["disableCookies"]);
          }

          _paq.push(["setCustomUrl", url]);

          _paq.push(["setDocumentTitle", title]);

          _paq.push(["trackPageView"]);

          _paq.push(['enableLinkTracking']);
        });
      });
    }
  };
  _exports.default = _default;
});
}
