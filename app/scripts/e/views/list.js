var BlogCollection = require('e/models/e-blogs-collection');
var BlogView = require('e/views/item');

var BlogsView = Backbone.View.extend({
  template: JST['e/e'],

  initialize: function(){
    var self = this;
    this.listenTo(this.collection, 'add remove', this.render);
    this.listenTo(this.collection, 'change', function(){
      setTimeout(function(){
        self.render();
      },30);
    },this);
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
    var blogsView = new BlogView({model:blog});
    self.$el.append(blogsView.render().el);
  });
 }

});

module.exports = BlogsView;
