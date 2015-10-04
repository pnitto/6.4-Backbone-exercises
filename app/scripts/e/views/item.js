var Blog = require('e/models/e-blogs');

var BlogView = Backbone.View.extend({
  model: new Blog(),
  tagName: 'li',
  template: JST['e/e'],
  events: {
    'click .edit-btn' : 'edit'
  },
  render: function(){
    this.$el.html(this.template().toJSON())
    return this;
  },
  edit: function(){
      var title = $('.title').html();
      var body = $('.body').html();
      $('.title').html('<input type="text" class="update-title" value="'+ title +
    '">')
    $('.body').html('<input type="text" class="update-body" value="'+ body +
    '">')
  }
});

module.exports = BlogView;
