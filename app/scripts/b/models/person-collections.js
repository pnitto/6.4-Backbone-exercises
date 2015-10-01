import person from 'b/models/person-info';

var personCollection = Backbone.Collection.extend({
  model: person,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/paul"
});


module.exports = personCollection;
