// ==UserScript==
// @name         张鑫旭博客
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  干掉广告
// @author       MO
// @create          2018-08-14
// @match        *://www.zhangxinxu.com/wordpress*
// @match        *://www.zhangxinxu.com/study*
// @run-at       document-end
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var el = {
        root: $("#page")
    }
    if(!el.root.length) el.root = $("body")
    el.root.find("#topAdOut").remove()
    el.root.find('.topa').remove()
    el.root.append('<style>.da_title,#respond,.da_col2,#respond ~ .navigation,.commentlist,.post,.navigation_top,.navigation_bot,#content .pagetitle{margin:auto}.navigation_bot{margin-top:36px}#ad,.bota{display:none!important;}@media(min-width:1600px){.narrowcolumn, .widecolumn{padding-right:15px}}</style>')
    el.root.find("#daYidengFloat").remove()
    el.root.find(".ins_txt").remove()
    el.root.find("p.link + div.link").remove()
    el.root.find(".da_article").remove()
    el.root.find(".da_title").remove()
    el.root.find(".da_col2").remove()
})();