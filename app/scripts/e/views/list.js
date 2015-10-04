var BlogCollection = require('e/models/e-blogs-collection');
var BlogView = require('e/views/item');

var BlogsView = Backbone.View.extend({
  el: $('.blog-list'),
  template: JST['e/e'],

  initialize: function(){
    this.listenTo(this.collection, 'add remove', this.render);
  },
  render: function(){
    var self = this;
    this.$el.html('');
    _.each(this.collection.toJSON(),function(blog){
      self.$el.append((new BlogView({model: blog})).render.$el);
  });
  return this;
},
});

module.exports = BlogsView;
