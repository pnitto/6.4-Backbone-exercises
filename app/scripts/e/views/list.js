var BlogCollection = require('e/models/e-blogs-collection');
var BlogView = require('e/views/item');

var BlogsView = Backbone.View.extend({
  model: BlogCollection,
  el: $('.blog-list'),
  initialize: function(){
    this.model.on('add', this.render, this);
  },
  render: function(){
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(),function(blog){
      self.$el.append((new BlogView({model: blog})).render.$el);
  });
  return this;
}
});


module.exports = BlogsView
