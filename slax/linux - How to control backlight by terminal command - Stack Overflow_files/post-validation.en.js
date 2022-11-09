StackExchange.postValidation=function(){function e(e,t,n){var r={"Title":".js-post-title-field","Body":".js-post-body-field[data-post-type-id="+t+"]","Tags":".js-post-tags-field","Mentions":".js-post-mentions-field","EditComment":".js-post-edit-comment-field","Excerpt":".js-post-excerpt-field","Email":".js-post-email-field","ArticleType":".js-article-type-field"};return r[n]?e.find(r[n]):$()}function t(t,n,r){var i=e(t,n,r);return r===D||r===R?t.find(".js-tag-editor").filter(function(){return $(this).data("target-field")===i.get(0)}):i}function n(e,t,n,r){var i=e.find('input[type="submit"]:visible, button[type="submit"]:visible'),a=i.length&&i.is(":enabled");a&&i.prop("disabled",!0),l(e,t,n),u(e,t,n,r),p(e,t,n),h(e,t,n),g(e,t,n),k(e,t,function(){d(e,t,n),a&&i.prop("disabled",!1)})}function r(r,s,c,l,u){n(r,s,c,l);var d,p=function(e){if(r.trigger("post:submit-completed",[{"formType":c,"postTypeId":s,"response":e}]),e.success)if(u)u(e);else{var t=window.location.href.split("#")[0],n=e.redirectTo.split("#")[0];0===n.indexOf("/")&&(n=window.location.protocol+"//"+window.location.hostname+n),d=!0,window.location=e.redirectTo,t.toLowerCase()===n.toLowerCase()&&window.location.reload(!0)}else e.captchaHtml?StackExchange.nocaptcha.init(e.captchaHtml,p):e.errors?(r.find(".js-post-prior-attempt-count").val(function(e,t){return(+t+1||0).toString()}),w(r,s,c,e.errors,e.warnings)):b(r,s,c,{"General":[$("<span/>").text(e.message).html()]},0)};r.submit(function(){if(r.find(".js-post-answer-while-asking-checkbox").is(":checked"))return!0;if(f(r,s,c))return StackExchange.helpers.enableSubmitButton(r),!1;if(o(),StackExchange.navPrevention&&StackExchange.navPrevention.stop(),r.find('input[type="submit"]:visible, button[type="submit"]').addClass("is-loading"),StackExchange.helpers.disableSubmitButton(r),StackExchange.options.site.enableNewTagCreationWarning){var n=e(r,s,D),l=n.prop("defaultValue");if(n.val()!==l)return $.ajax({"type":"GET","url":"/posts/new-tags-warning","dataType":"json","data":{"tags":n.val()},"success":function(e){if(e.showWarning){var n={"closeOthers":!0,"shown":function(){$(".js-confirm-tag-creation").on("click",function(e){return StackExchange.helpers.closePopups(),a(r,s,c,d,p),e.preventDefault(),!1})},"dismissing":function(){i(r,d)},"returnElements":t(r,s,D).find("input:visible")};StackExchange.helpers.showModal($(e.html).elementNodesOnly(),n),StackExchange.helpers.bindMovablePopups()}else a(r,s,c,d,p)}}),!1}return setTimeout(function(){a(r,s,c,d,p)},0),!1})}function i(e,t){e.find('input[type="submit"]:visible, button[type="submit"]').removeClass("is-loading"),t||StackExchange.helpers.enableSubmitButton(e)}function a(e,t,n,r,a){$.ajax({"type":"POST","dataType":"json","data":e.serialize(),"url":e.attr("action"),"success":a,"error":function(){var r=v(n,0);b(e,t,n,{"General":[$("<span/>").text(r).html()]},0)},"complete":function(){i(e,r)}})}function o(){for(var e=0;e<V.length;e++)clearTimeout(V[e]);V=[]}function s(t,n,r,i,a){e(t,n,i).blur(function(){var e=this,o=$(this),s=function(e){E(t,n,r,i,e)},c=function(e){return x(e,t,n,r,[i])};V.push(setTimeout(function(){var t=StackExchange.stacksValidation.handlerFor(o);t&&!M&&t.clear(),a.call(e,o,s,c)},z))})}function c(t,n,r,i,a){if(1===n)return x({"type":"POST","url":"/posts/validate-question","data":{"title":e(t,n,N).val(),"body":e(t,n,P).val(),"tags":e(t,n,D).val(),"fkey":StackExchange.options.user.fkey}},t,n,r,[N,P,D],a).promise();if(2===n)return x({"type":"POST","url":"/posts/validate-body","data":{"body":e(t,n,P).val(),"oldBody":e(t,n,P).prop("defaultValue"),"isQuestion":!1,"isSuggestedEdit":i||!1,"fkey":StackExchange.options.user.fkey}},t,n,r,[P],a).promise();var o=$.Deferred();return o.reject(),o.promise()}function l(e,t,n){s(e,t,n,N,function(e,t,n){var r=e.val(),i=$.trim(r).length,a=e.data("min-length"),o=e.data("max-length");return 0!==i||M?a&&a>i?(t(function(e){return 1==e.minLength?"Title must be at least "+e.minLength+" character.":"Title must be at least "+e.minLength+" characters."}({"minLength":a})),void 0):o&&i>o?(t(function(e){return 1==e.maxLength?"Title cannot be longer than "+e.maxLength+" character.":"Title cannot be longer than "+e.maxLength+" characters."}({"maxLength":o})),void 0):(n({"type":"POST","url":"/posts/validate-title","data":{"title":r,"fkey":StackExchange.options.user.fkey}}),void 0):(t(),void 0)})}function u(e,t,n,r){s(e,t,n,P,function(e,n,i){var a=e.val(),o=$.trim(a).length,s=e.data("min-length");return 0!==o||M?5===t?(s&&s>o?n(function(e){return"Wiki Body must be at least "+e.minLength+" characters. You entered "+e.actual+"."}({"minLength":s,"actual":o})):n(),void 0):((1===t||2===t)&&i({"type":"POST","url":"/posts/validate-body","data":{"body":a,"oldBody":e.prop("defaultValue"),"isQuestion":1===t,"isSuggestedEdit":r,"fkey":StackExchange.options.user.fkey}}),void 0):(n(),void 0)})}function d(e,t,n){s(e,t,n,D,function(e,t,n){var r=e.val(),i=$.trim(r).length;return 0!==i||M?(n({"type":"POST","url":"/posts/validate-tags","data":{"tags":r,"oldTags":e.prop("defaultValue"),"fkey":StackExchange.options.user.fkey},"success":function(t){var n=e.closest(".js-post-form").find(".js-warned-tags-field");if(n.length){var r=n.val(),i=n.data("warned-tags")||[],a=((t.source||{}).Tags||[]).filter(function(e){return e&&-1===i.indexOf(e)});a.length>0&&StackExchange.using("gps",function(){a.forEach(function(e){StackExchange.gps.track("tag_warning.show",{"tag":e},!0),r+=" "+e,i.push(e)}),n.val($.trim(r)).data("warned-tags",i),StackExchange.gps.sendPending()})}}}),void 0):(t(),void 0)})}function f(t,n,r){return"[Edit removed during grace period]"===$.trim(e(t,n,L).val())?(E(t,n,r,L,"Comment reserved for system use. Please use an appropriate comment."),!0):!1}function p(e,t,n){s(e,t,n,L,function(r,i){var a=r.val(),o=$.trim(a).length,s=r.data("min-length"),c=r.data("max-length");return 0===o?(i(),void 0):s&&s>o?(i(function(e){return 1==e.minLength?"Your edit summary must be at least "+e.minLength+" character.":"Your edit summary must be at least "+e.minLength+" characters."}({"minLength":s})),void 0):c&&o>c?(i(function(e){return 1==e.maxLength?"Your edit summary cannot be longer than "+e.maxLength+" character.":"Your edit summary cannot be longer than "+e.maxLength+" characters."}({"maxLength":c})),void 0):(f(e,t,n)||i(),void 0)})}function h(e,t,n){s(e,t,n,U,function(e,t){var n=e.val(),r=$.trim(n).length,i=e.data("min-length"),a=e.data("max-length");return 0===r?(t(),void 0):i&&i>r?(t(function(e){return"Wiki Excerpt must be at least "+e.minLength+" characters; you entered "+e.actual+"."}({"minLength":i,"actual":r})),void 0):a&&r>a?(t(function(e){return"Wiki Excerpt cannot be longer than "+e.maxLength+" characters; you entered "+e.actual+"."}({"maxLength":a,"actual":r})),void 0):(t(),void 0)})}function g(e,t,n){s(e,t,n,B,function(e,t){var n=e.val(),r=$.trim(n),i=r.length;return 0===i?(t(),void 0):StackExchange.helpers.isEmailAddress(r)?(t(),void 0):(t("This email does not appear to be valid."),void 0)})}function m(e,t){var n=$("#sidebar, .sidebar").first().width()||270,r="lg"===StackExchange.responsive.currentRange();return e===q?{"position":"inline","css":{"display":"inline-block","margin-bottom":"10px"},"closeOthers":!1,"dismissable":!1,"type":t}:{"position":{"my":r?"left top":"top center","at":r?"right center":"bottom center"},"css":{"max-width":n,"min-width":n},"closeOthers":!1,"type":t}}function v(e,t){if(t>0)switch(e){case"question":return function(e){return 1==e.specificErrorCount?"Your question couldn't be submitted. Please see the error above.":"Your question couldn't be submitted. Please see the errors above."}({"specificErrorCount":t});case"answer":return function(e){return 1==e.specificErrorCount?"Your answer couldn't be submitted. Please see the error above.":"Your answer couldn't be submitted. Please see the errors above."}({"specificErrorCount":t});case"edit":return function(e){return 1==e.specificErrorCount?"Your edit couldn't be submitted. Please see the error above.":"Your edit couldn't be submitted. Please see the errors above."}({"specificErrorCount":t});case"tags":return function(e){return 1==e.specificErrorCount?"Your tags couldn't be submitted. Please see the error above.":"Your tags couldn't be submitted. Please see the errors above."}({"specificErrorCount":t});case"article":return function(e){return 1==e.specificErrorCount,"Your article couldn't be submitted. Please see the errors above."}({"specificErrorCount":t});default:return function(e){return 1==e.specificErrorCount?"Your post couldn't be submitted. Please see the error above.":"Your post couldn't be submitted. Please see the errors above."}({"specificErrorCount":t})}else switch(e){case"question":return"An error occurred submitting the question.";case"answer":return"An error occurred submitting the answer.";case"edit":return"An error occurred submitting the edit.";case"tags":return"An error occurred submitting the tags.";case"article":return"An error occurred submitting the article.";default:return"An error occurred submitting the post."}}function b(e,t,n,r,i){var a=e.find(".js-general-error").text("").removeClass("d-none");if(!_(e,a,r,null,q,t,n))return i>0?(a.text(v(n,i)),void 0):(a.addClass("d-none"),void 0)}function y(e){var t=$(".js-post-review-summary").closest(".js-post-review-summary-container");if(t.length>0)return t.filter(":visible").scrollIntoView(),void 0;var n;A()&&($("#sidebar").animate({"opacity":.4},500),n=setInterval(function(){A()||($("#sidebar").animate({"opacity":1},500),clearInterval(n))},500));var r;e.find(".validation-error, .js-stacks-validation.has-error").each(function(){var e=$(this).offset().top;(!r||r>e)&&(r=e)});var i=function(){for(var t=0;3>t;t++)e.find(".message").animate({"left":"+=5px"},100).animate({"left":"-=5px"},100)};if(r){var a=$(".review-bar").length;r=Math.max(0,r-(a?125:30)),$("html, body").animate({"scrollTop":r},i)}else i()}function w(e,t,n,r,i){r&&k(e,t,function(){var a=S(e,t,n,[N,P,D,R,L,U,B,F],r,i).length;b(e,t,n,r,a),y(e)})}function k(e,n,r){var i=function(){1!==n||t(e,n,D).length?r():setTimeout(i,250)};i()}function x(e,t,n,r,i,a){return $.ajax(e).then(function(e){return a?$.when(a()).then(function(){return e}):e}).done(function(e){S(t,n,r,i,e.errors,e.warnings)}).fail(function(){S(t,n,r,i,{},{})})}function S(e,n,r,i,a,o){for(var s=[],c=0;c<i.length;c++){var l=i[c];_(e,t(e,n,l),a,o,l,n,r)&&s.push(l)}return s}function E(e,n,r,i,a){C(e,t(e,n,i),a?[$("<span/>").text(a).html()]:[],[],i,n,r)}function _(e,t,n,r,i,a,o){var s=n[i]||[],c=(r||{})[i]||[];return C(e,t,s,c,i,a,o)}function C(e,t,n,r,i,a,o){var s=StackExchange.stacksValidation.handlerFor(t);return s?j(s,a,o,n,r,i):T(t,i,n),e.find(".validation-error, .js-stacks-validation.has-error").length||e.find(".js-general-error").text(""),t.trigger("post:validated-field",[{"errors":n,"warnings":r,"field":i,"postTypeId":a,"formType":o}]),n.length>0}function j(e,t,n,r,i){e.clear("error"),r.forEach(function(t){e.add("error",t)}),"edit"===n||"question"===n&&M||(e.clear("warning"),i.forEach(function(t){e.add("warning",t)}))}function T(e,t,n){e&&e.length&&(0===n.length||1===n.length&&""===n[0]||!$("html").has(e).length?I(e):O(e,n,m(t,"error")))}function O(e,t,n){var r=1===t.length?t[0]:"<ul><li>"+t.join("</li><li>")+"</li></ul>",i=e.data("error-popup");if(i&&i.is(":visible")){var a=e.data("error-message");if(a===r)return i.animateOffsetTop&&i.animateOffsetTop(0),void 0;i.fadeOutAndRemove()}var s=StackExchange.helpers.showMessage(e,r,n);s.find("a").attr("target","_blank"),s.click(o),e.addClass("validation-error").data("error-popup",s).data("error-message",r)}function I(e){var t=e.data("error-popup");t&&t.is(":visible")&&t.fadeOutAndRemove(),e.removeClass("validation-error"),e.removeData("error-popup"),e.removeData("error-message")}function A(){var e=!1,t=$("#sidebar, .sidebar").first();if(!t.length)return!1;var n=t.offset().left;return $(".message").each(function(){var t=$(this);return t.offset().left+t.outerWidth()>n?(e=!0,!1):void 0}),e}var M=$("body").hasClass("js-ask-page-v2"),N="Title",P="Body",D="Tags",R="Mentions",L="EditComment",U="Excerpt",B="Email",q="General",F="ArticleType",V=[],z=250;return{"initOnBlur":n,"initOnBlurAndSubmit":r,"showErrorsAfterSubmission":w,"validatePostFields":c,"scrollToErrors":y}}();