// ==UserScript==
// @name            Motonet: Show product description
// @name:fi         Motonet: Näytä tuotekuvaus
// @namespace       https://github.com/AutomotiveLily/userscript
// @version         0.3
// @downloadURL     https://github.com/AutomotiveLily/userscript/raw/main/Motonet-%20Show%20product%20description.user.js
// @updateURL       https://github.com/AutomotiveLily/userscript/raw/main/Motonet-%20Show%20product%20description.user.js
// @description     Change to product description tab after loading the page.
// @description:fi  Vaihda tuotekuvaus-välilehteen sivun latauduttua
// @author          AutomotiveLily
// @match           https://www.motonet.fi/*
// @icon            https://www.google.com/s2/favicons?sz=64&domain=motonet.fi
// @grant           none
// @run-at          document-idle
// ==/UserScript==

(function() {
  'use strict';

  var $ = window.jQuery;

  if (!$) {
    console.error('jQuery not found');
    return;
  }

  $(document).ready(function() {
    setImmediate(function() {
      clickLinkWithText("Tuotekuvaus");
      disableTabSaldotiedot();
    });
  });

  function clickLinkWithText(linkText) {
    var targetLink = $("a:contains('" + linkText + "')");
    if (targetLink.length) {
      triggerMouseEvent(targetLink[0], "click");
    }
  }

  function triggerMouseEvent(node, eventType) {
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent(eventType, true, true);
    node.dispatchEvent(clickEvent);
  }

  function disableTabSaldotiedot() {
    $('#tab-saldotiedot').off('click');
  }
})();
