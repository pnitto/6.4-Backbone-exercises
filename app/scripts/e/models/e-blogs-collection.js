var Blogs = require('e/models/e-blogs');

var BlogsCollection = Backbone.Collection.extend({
  model: Blogs,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/blog/"
});



module.exports = BlogsCollection;
