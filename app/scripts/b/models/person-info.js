var personInfo = Backbone.Model.extend({
  defaults: function(){
    return {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    }
  }
})

module.exports = personInfo;
