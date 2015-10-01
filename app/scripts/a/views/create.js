var CreatePost = Backbone.View.extend({
    tagName: 'form',
    className: 'post-form',
    template: JST['a/a'],
    events: {
      'submit': 'createPost'
    },
    render: function(){
      this.$el.html(this.template());
      return this;
    },
    createPost: function(e){
      e.preventDefault();
      App.posts.create(this.serialize());
    },
    serialize: function(){
      var result = {};
      var input = this.$el.serializeArray();
      input.forEach(function(input){
        result[input.name] = input.value;
      });
      return result;
    }
    });

module.exports = CreatePost;
