// ==UserScript==
// @name         e-typing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  delete a waste char
// @author       makky
// @match        https://www.e-typing.ne.jp/english/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    'use strict';
	document.onkeyup = function (e) {
		console.log('delete a waste char');
        var span = $('#sentenceText span:last');
        var text = span.text();
        console.log(text);
        var replaced = text.replace(/␣/g, " ");
        console.log(replaced);
        span.text(replaced);
    }
})();

