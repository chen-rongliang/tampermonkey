// ==UserScript==
// @name         贴吧广告
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  干掉贴吧广告
// @author       MO
// @create       2018-08-14
// @match        *://tieba.baidu.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

'use strict';

;(function() {

    document.body.insertAdjacentHTML('beforeEnd','<style>.threadlist_bright li:not(.j_thread_list),.l_post_bright:not([data-field]){display:none}</style>')

})()
