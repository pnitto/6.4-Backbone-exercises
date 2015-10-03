var blog = require('c/models/blog-reading');

var blogCollection = Backbone.Collection.extend({
  model: blog,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/blog/"
});

module.exports = blogCollection;
