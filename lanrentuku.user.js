// ==UserScript==
// @name         懒人图库
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  干掉广告
// @author       MO
// @create          2018-08-14
// @match        *://www.lanrentuku.com/*
// @match        *://tool.lanrentuku.com/*
// @run-at       document-end
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

;(function() {
    'use strict';
    var el = {
        root: $("body")
    }

    el.root.find(".yulu").remove()
    el.root.find("#topad").remove()
    el.root.find("#bdshare").remove()
    el.root.find(".in-ada").remove()
    el.root.find(".lb728x90_2").remove()
    el.root.find(".lb700x22").remove()
    el.root.find("#l").css({
        'width': 'auto',
        'float': 'none',
        'border-right-width': '0'
    })
    el.root.find("#r").remove()

})()
