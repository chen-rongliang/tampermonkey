// ==UserScript==
// @name         CSDN干掉广告
// @namespace       [url=mailto:772332013@qq.com]772332013@qq.com[/url]
// @version      1.0.0
// @description  干掉广告
// @author       MO
// @create          2018-08-22
// @match        *://blog.csdn.net/*
// @run-at       document-end
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @grant           GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    var el = {
        root: $("body")
    }

    el.root.find(".box-box-aways").remove()
    el.root.find(".box-box-large").remove()
    el.root.find(".meau-list").remove()
    el.root.find("info-div").remove()
    el.root.find("aside").remove()
    el.root.find(".pulllog-box").remove()
    el.root.find("#adContent").remove()

    el.root.find(".blog-content-box").siblings('div').css({
        'position': 'fixed',
        'top': '-9999px'
    })
    el.root.find(".comment-box").remove()
    el.root.find("newsfeed").remove()

    el.root.append('<style>@media screen and (min-width: 1320px){.container main, .pulllog main{width:auto}}.left-menu li:not(:first-child){display:none}</style>')

})();