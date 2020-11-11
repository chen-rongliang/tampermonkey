// ==UserScript==
// @name         吾爱破解干掉广告
// @namespace    [url=mailto:772332013@qq.com]772332013@qq.com[/url]
// @version      1.0.0
// @description  干掉广告
// @author       MO
// @create          2020-01-17
// @match        *://www.52pojie.cn/*
// @run-at       document-end
// @grant           GM_addStyle
// ==/UserScript==

(function(doc) {
    'use strict';
    var lists = [
        '.adsbygoogle',
        '[id^="loadad"]',
        '.lk',
        '.hidden'
    ]

    document.body.insertAdjacentHTML('beforeEnd', '<style>'+ lists.join(',') +'{display:none!important;width:0!important;height:0!important;opacity:0!important;pointer-events:none!important}</style>')


})(document);
