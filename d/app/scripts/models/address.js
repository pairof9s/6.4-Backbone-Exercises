var Backbone = require('backbone');

var Address = Backbone.Model.extend({
  idAttribute: '_id',
});

var AddressCollection = Backbone.Collection.extend({
  model: Address,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/D9url',
});

module.exports = {
  'Address': Address,
  'AddressCollection': AddressCollection,
}
