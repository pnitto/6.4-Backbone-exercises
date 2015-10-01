
var createPost = require('a/views/create');
var postCollection = require('a/models/post-collections');


window.App = {};

$(document).ready(function(){
  //$('#container').append(JST['a/a']());

App.posts = new postCollection();
window.CreatePost = new createPost();

$('.person-submit-btn').on('click', function(){
  console.log(App.persons.fetch())
})
$('#container').append(CreatePost.render().el);

});
