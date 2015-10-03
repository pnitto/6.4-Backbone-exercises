var blogCollection = require('c/models/blog-reading-collection');
var blogListView = require('c/views/list');
var blogItemView = require('c/views/item');

window.App = {};

$(document).ready(function(){
//$('#container').append(JST['c/c']());

App.blog = new blogCollection();
//console.log(App.blog.fetch());

window.bloglist = new blogListView({collection: App.blog});

bloglist.collection.fetch();
$('.js-title').on('click', function(){
  console.log('hello');
});

$("#container").append(bloglist.el);


});
