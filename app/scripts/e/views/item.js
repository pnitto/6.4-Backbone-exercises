var Blog = require('e/models/e-blogs');

var BlogView = Backbone.View.extend({
  model: new Blog(),
  tagName: 'li',
  template: JST['e/e'],

  render: function(){
    this.$el.html(this.template(this.model.toJSON()))
    return this;
  }
});

module.exports = BlogView;
