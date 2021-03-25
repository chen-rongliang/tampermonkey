// ==UserScript==
// @name         屏蔽掘金用户
// @namespace    [url=mailto:772332013@qq.com]772332013@qq.com[/url]
// @version      1.1.1
// @description  屏蔽不感兴趣掘金用户，仅限话题区。等页面加载好之后，鼠标移动到每条资讯上，右上角都会有个关闭按钮，点击就会隐藏。如果想取消，自行编辑localStorage的blackList字段
// @author       MO
// @create          2021-03-25
// @match        *://juejin.cn/*
// @run-at       document-end
// @grant           GM_addStyle
// ==/UserScript==

(function(doc) {
    'use strict';

    let $el = doc.querySelector('.pin-list-wrap');

    let blackList = localStorage.getItem('blackList');  // 黑名单用户id
    blackList = blackList ? blackList.split(',') : [];

    let blackListReg = new RegExp(blackList.join('|')||'[^\\d]');
    let len = 0;

    // 检测黑名单id
    function checkUser ($el, list) {
        let result = false;
        // 发现包含黑名单id
        let target = $el.querySelector('.user-popover-box[st\\3Astate]');
        if(target && blackListReg.test(target.getAttribute('st:state'))) {
            // 标记true
            result = true;
        }
        return result;
    }
    // 设置列表
    function setList () {

        if(!blackList.length) return

        let list = $el.querySelectorAll('li')

        // 读取新的列表li
        for(;len < list.length; len++) {
            // 命中黑名单就去除
            if(checkUser(list[len], blackList)){
                list[len].style.display = 'none';
            }
        }
    }
    // 设置黑名单
    function setBlackList (id) {
        blackList.push(id)
        localStorage.setItem('blackList',blackList.join())
        blackListReg = new RegExp(blackList.join('|'))
        len = 0
        setList()
    }


    // 监听元素事件
    if($el){
        $el.addEventListener('DOMNodeRemoved', function() { len = 0; });
        $el.addEventListener('DOMNodeInserted', setList, false);
    }

    window.addEventListener('load', () => {
        // 插入节点
        $el.insertAdjacentHTML('afterBegin','<style>.pin-list-wrap .item{position:relative}.pin-list-wrap .user-popover-box{pointer-events:none}.pin-list-wrap .user-popover-box a{pointer-events:auto}.pin-list-wrap .user-popover-box:after{display:block;width:20px;line-height:20px;content:\'×\';position:absolute;top:0;right:0;font-size:16px;text-align:center;border:1px solid;color:#f69;cursor:pointer;opacity:0;transition:opacity 0.25s;pointer-events:auto}.pin-list-wrap .item:hover .user-popover-box:after{opacity:1}</style>');
        $el.addEventListener('click', ev => {
            let target = ev.target || ev.srcElement;
            if(target.classList.contains('user-popover-box')) {
                let userid = target.getAttribute('st:state');
                setBlackList(userid)
            }
        }, false);
    })

})(document);
