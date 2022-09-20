// ==UserScript==
// @name         张鑫旭博客
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  干掉广告
// @author       MO
// @create       2018-08-14
// @match        *://www.zhangxinxu.com/wordpress*
// @run-at       document-end
// @grant        none
// ==/UserScript==

;(function() {
    'use strict';
    var lists = [
        '.sign-intro + *',
        '.adsbygoogle',
        '.wp_share_box'
    ];

    document.body.insertAdjacentHTML('beforeEnd', '<style>'+ lists.join(',') +'{position:absolute!important;top:-1000px!important;left:-1000px!important}</style>');
})()
