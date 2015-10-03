var blogCollection = require('c/models/blog-reading-collection');
var itemView = require('c/views/item');

var blogListView = Backbone.View.extend({
  tagname: 'ul',
  className: 'blog-list',
  template: JST['c/c'],

  initialize: function(){
    this.listenTo(this.collection, 'update', this.render);
  },
  render: function(){
  this.$el.html(this.template());
  this.renderChildren();
  return this;
  },
  renderChildren: function(){
  var self = this;
  this.$el.html(this.template());
  this.collection.each(function(blog){
    var itemsView = new itemView({model:blog});
    self.$el.append(itemsView.render().el);
  });
 }
});

module.exports = blogListView;
