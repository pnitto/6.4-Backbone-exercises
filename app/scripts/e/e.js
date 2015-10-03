var Blogs = require('e/models/e-blogs');
var BlogCollection = require('e/models/e-blogs-collection');
var BlogsView = require('e/views/list')

window.App = {}
$(document).ready(function(){
$('#container').append(JST['e/e']());

App.Collection = new BlogCollection();



$('.add-post').on('click',function(){
  var blog = new Blogs({
    title:$('.input-crud-title').val(),
    body:$('.input-crud-body').val()
  });
  console.log(blog.toJSON())
  App.Collection.add(blog)

})

});
