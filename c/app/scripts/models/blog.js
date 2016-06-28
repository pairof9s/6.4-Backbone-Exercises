var Backbone = require('backbone');

var Blog = Backbone.Model.extend({
  idAttribute: '_id',
});

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/D9bloglist',
});

module.exports = {
  'Blog': Blog,
  'BlogCollection': BlogCollection,
}
