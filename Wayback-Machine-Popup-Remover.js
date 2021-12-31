// ==UserScript==
// @name         Wayback Machine Popup Remover
// @namespace    https://github.com/Peeyos1
// @version      1.0
// @description  Removes any popups that you may see on Wayback Machine
// @author       PIjus
// @match        https://*.web.archive.org/*
// @grant        https://*.web.archive.org/*
// ==/UserScript==
var elem = document.getElementById("donate_banner");
  elem.parentNode.removeChild(elem);
