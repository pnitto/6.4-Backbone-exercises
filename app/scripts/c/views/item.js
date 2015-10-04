var Blog = require('c/models/blog-reading')

var blogItemView = Backbone.View.extend({
  tagName: 'li',
  template: JST['c/c-item'],
  events: {
    'click': 'detailview'
  },
  initialize: function(){
    //console.log("blogItemView")
  },
  render: function(){
  this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
  detailview: function(){
    $('.item-view').html('');
    var itemView = new blogItemView({model: this.model});
    $('#container').append(itemView.render().el);
    return this;
  }
  });

module.exports = blogItemView;
