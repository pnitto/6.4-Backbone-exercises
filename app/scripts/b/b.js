var personCreate = require('b/views/create')
var personCollection = require('b/models/person-collections')

window.App = {};

$(document).ready(function(){
 //$('#container').append(JST['b/b']());


App.persons = new personCollection();
window.createPerson = new personCreate();

$('.person-submit-btn').on('click', function(){
  console.log(App.persons.fetch())
})

$('#container').append(createPerson.render().el)

})
