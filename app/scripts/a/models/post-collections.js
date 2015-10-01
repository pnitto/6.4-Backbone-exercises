var post = require('a/models/post');

var postCollection = Backbone.Collection.extend({
  model: post,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/list/"
});


module.exports = postCollection;
