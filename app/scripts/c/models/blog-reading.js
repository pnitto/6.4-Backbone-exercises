var blog = Backbone.Model.extend({
  defaults:function(){
    return {
      title: "",
      body: "",
    };
  },
  idAttribute: "_id"
});

module.exports = blog;
