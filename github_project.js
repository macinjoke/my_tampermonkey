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
    console.log('New Issue Button from Tampermonkey');
    var author = $('span.author > a').eq(0).text();
    console.log(author)
    var repository = $('span.author > span > a').text();
    console.log(repository)
    $('.d-flex.flex-items-center.f5').after('<a href="https://github.com/' + author + '/' + repository + '/issues/new">New Issue</a>');
    console.log('code end');
})();

