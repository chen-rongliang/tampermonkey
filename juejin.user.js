// ==UserScript==
// @name         屏蔽掘金黑名单
// @namespace    [url=mailto:772332013@qq.com]772332013@qq.com[/url]
// @version      1.0.0
// @description  屏蔽黑名单
// @author       MO
// @create          2018-08-22
// @match        *://juejin.cn/*
// @run-at       document-end
// @grant           GM_addStyle
// ==/UserScript==

(function(doc) {
    'use strict';

    // 黑名单用户id
    let blackList = ['123456','456798'];

    // 检测黑名单id
    function checkUser ($el, list) {
        let result = false;
        for(let id of list) {
            // 发现包含黑名单id
            if($el.querySelector(`a[href$="${id}"]`)) {
                // 标记true，中断循环
                result = true;
                break;
            }
        }
        return result;
    }

    let $el = doc.querySelector('.pin-list-wrap');
    // 监听元素插入事件
    $el.addEventListener('DOMNodeInserted', ev => {
        // 读取新的列表li
        $el.querySelectorAll('li').forEach($li => {
            // 命中黑名单就去除
            if(checkUser($li, blackList)){
                $li.style.display = 'none';
            }
        })
    }, false);


})(document);
