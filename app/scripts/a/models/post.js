var Post = Backbone.Model.extend({
  defaults: function(){
    return {
      title: "",
      body: "",

    };
  }

});

module.exports = Post
