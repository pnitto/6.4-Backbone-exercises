var Blogs = require('e/models/e-blogs');
var BlogCollection = require('e/models/e-blogs-collection');
var BlogsView = require('e/views/list')
var BlogView = require('e/views/item')


window.App = {}
$(document).ready(function(){
$('#container').append(JST['e/e']());

App.Collection = new BlogCollection();

App.ListView = new BlogsView({collection: App.Collection})

$('.add-post').on('click',function(){
  var blog = new Blogs({
    title:$('.input-crud-title').val(),
    body:$('.input-crud-body').val()
  });
  console.log(blog.toJSON())
  App.Collection.add(blog)

  $('#container').append(App.ListView.render().el)

})
})
