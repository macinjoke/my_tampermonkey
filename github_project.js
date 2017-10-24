// add New Issue button in project page

(function() {
    'use strict';
    console.log('New Button was added');
    var author = $('span.author > a').eq(0).text();
    var repository = $('span.author > span > a').text();
    $('.d-flex.flex-justify-between.flex-items-center.f6').after('<a href="https://github.com/' + author + '/' + repository + '/issues/new">New Issue</a>');
})();

