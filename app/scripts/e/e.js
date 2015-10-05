var Blogs = require('e/models/e-blogs');
var BlogCollection = require('e/models/e-blogs-collection');
var BlogsView = require('e/views/list');
var BlogView = require('e/views/item');


window.App = {};
$(document).ready(function(){
$('#container').append(JST['e/e']());

App.Collection = new BlogCollection();
//App.Collection.fetch();
App.ListView = new BlogsView({collection: App.Collection});

$('.add-post').on('click',function(){
  var blog = new Blogs({
    title:$('.input-crud-title').val(),
    body:$('.input-crud-body').val()
  });
  $('.crud-div').html('');
  App.Collection.add(blog);

  console.log(blog.toJSON());
  $('#container').append(App.ListView.render().el);
});
});
