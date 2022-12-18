// ==UserScript==
// @name            Motonet: Show product description
// @name:fi         Motonet: Näytä tuotekuvaus
// @namespace       https://github.com/AutomotiveLily/userscript
// @version         0.2
// @downloadURL     https://github.com/AutomotiveLily/userscript/raw/main/Motonet-%20Show%20product%20description.user.js
// @updateURL       https://github.com/AutomotiveLily/userscript/raw/main/Motonet-%20Show%20product%20description.user.js
// @description     Change to product description tab after loading the page.
// @description:fi  Vaihda tuotekuvaus-välilehteen sivun latauduttua
// @author          AutomotiveLily
// @match           https://www.motonet.fi/*
// @icon            https://www.google.com/s2/favicons?sz=64&domain=motonet.fi
// @grant           none
// ==/UserScript==

// Modified from this script: https://stackoverflow.com/a/19343058

// Wait for the page to load.
// Odota että sivu latautuu.
setTimeout (clickLinkWithText, 1000, "Tuotekuvaus");

function clickLinkWithText (linkText) {
    var targetLink = $("a:contains('" + linkText + "')");
    if (targetLink.length) {
        triggerMouseEvent (targetLink[0], "click");
    }
}

function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}