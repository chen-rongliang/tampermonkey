// ==UserScript==
// @name         sass官网去广告
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  干掉广告
// @author       MO
// @create          2018-08-14
// @match        *://www.sass.hk/*
// @run-at       document-end
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

;(function() {
    'use strict';
    var el = {
        root: $("body")
    }

    el.root.find(".adsbygoogle").remove()
    el.root.find("[class^='gg']").remove()


})()
