var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  idAttribute: '_id',
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/D9contactsmgr',
});

module.exports = {
  'Contact': Contact,
  'ContactCollection': ContactCollection,
}
