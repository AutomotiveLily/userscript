// ==UserScript==
// @name         Motonet: Show product description
// @name:fi      Motonet: Näytä tuotekuvaus
// @namespace    https://github.com/AutomotiveLily/userscript
// @version      0.1
// @description  Change to product description tab after loading the page.
// @description:fi Vaihda tuotekuvaus-välilehteen sivun latauduttua
// @author       AutomotiveLily
// @match        https://www.motonet.fi/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=motonet.fi
// @grant        none
// ==/UserScript==

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