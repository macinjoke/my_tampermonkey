// ==UserScript==
// @name         github project
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add new issue button in project page
// @author       makky
// @match        https://github.com/*/*/projects/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    console.log('New Issue Button was added');
    var author = $('span.author > a').eq(0).text();
    var repository = $('span.author > span > a').text();
    $('.d-flex.flex-justify-between.flex-items-center.f6').after('<a href="https://github.com/' + author + '/' + repository + '/issues/new">New Issue</a>');
})();

