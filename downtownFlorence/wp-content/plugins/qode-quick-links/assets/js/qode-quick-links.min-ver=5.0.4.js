!function(a){"use strict";function b(){var b=a(".qode-quick-links-holder"),c=a(".qode-quick-links-button");setTimeout(function(){b.addClass("qode-quick-links-loaded")},300),c.on("click",function(){b.hasClass("qode-quick-links-pop-up-opened")?b.removeClass("qode-quick-links-pop-up-opened"):b.addClass("qode-quick-links-pop-up-opened")}),a(".content, .qode-quick-links-pop-up-close").on("click",function(){b.hasClass("qode-quick-links-pop-up-opened")&&b.removeClass("qode-quick-links-pop-up-opened")})}function c(){a(".qode-quick-links-items").mCustomScrollbar()}a(document).ready(function(){b(),c()}),a(document).on("qodeAjaxPageLoad",function(){})}(jQuery);