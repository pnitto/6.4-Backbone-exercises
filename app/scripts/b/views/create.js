var createPerson = Backbone.View.extend({
  tagName: 'form',
  className: 'person-form',
  template: JST['b/b'],
  events: {
    'submit': 'createPerson'
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  createPerson: function(e){
    e.preventDefault();
    App.persons.create(this.serialize());
  },
  serialize: function(){
    var result = {};
    var input = this.$el.serializeArray();
    input.forEach(function(input){
      result[input.name] = input.value;
    });
    return result;
  }
})

module.exports = createPerson;
