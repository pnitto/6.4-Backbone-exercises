var blogCollection = require('c/models/blog-reading-collection');
var blogListView = require('c/views/list');
var blogItemView = require('c/views/item');


window.App = {};
$(document).ready(function(){
//$('#container').append(JST['c/c']());

App.blog = new blogCollection();
App.blog.fetch();

App.bloglist = new blogListView({collection: App.blog});

$("#container").append(App.bloglist.render().el);


});
