// ==UserScript==
// @name         百家号广告
// @version      1.0.0
// @description  去除百家号app按钮
// @author       MO
// @create       2024-01-29
// @match        https://baijiahao.baidu.com/s
// @run-at       document-end
// ==/UserScript==

'use strict';

;(function() {

    document.body.insertAdjacentHTML('beforeend', `<style>${['.newHeadDeflectorContainer','.bdrainrwlandingTts','.foldMaskWrapper','#bdrainrwDragButton'].join()}{display:none;}#mainContentContainer{height:auto!important;overflow:auto!important;}</style>`);

})();