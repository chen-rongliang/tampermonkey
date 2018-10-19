// ==UserScript==
// @name         百度广告
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  干掉百度广告
// @author       MO
// @create       2018-08-14
// @match        *://www.baidu.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

'use strict';

;(function() {

    document.body.insertAdjacentHTML('beforeEnd','<style>#content_left,#content_left .result,.nums{ width:auto!important;}#content_left>div:not(.result){width:1px!important;height:1px!important;overflow:hidden;margin:auto;}#content_right{display:none}</style>')

    setTimeout(function(){
        var list = document.querySelector('.m'),
            i = 0, pEl

        var parents = function(el,className){
            let parentEl = el.parentNode
            if(parentEl===null || parentEl.classList.contains(className)){
                return parentEl
            }else {
                return parents(parentEl, className)
            }
        }

        for(; i < list.length; i ++){
            if(/广告/.test(list[i].innerText)){
                pEl = parents(list[i], 'result')
                if(pEl) pEl.style.display = 'none!important'
            }
        }
    },1500)

})()
