// ==UserScript==
// @name         片源网
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  干掉广告
// @author       MO
// @create       2019-05-24
// @match        *://www.pianyuan.la*
// @run-at       document-end
// @grant        none
// ==/UserScript==

$(function() {
    'use strict';
    $('[class^="ADTOPLB"]').remove()
})
