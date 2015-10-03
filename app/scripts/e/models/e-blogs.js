var Blogs = Backbone.Model.extend({
  defaults: function(){
    return {
      title: "",
      body: "",
    };
  },
  initialize: function(){
    console.log("Initializing the Blogs Model.....");
  }
});


module.exports = Blogs;
