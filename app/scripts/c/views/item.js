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
  this.$el.html(this.template({
        model: this.model.toJSON()
      }));
      return this;
    },
  detailview: function(){
    this.$el.html(this.template());
    return this;
  }
  });
/*
serializeForm: function() {
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input) {
      result[input.name] = input.value;
    });
    return result;
  }
  */


module.exports = blogItemView;
