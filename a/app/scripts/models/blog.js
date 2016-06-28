var Backbone = require('backbone');


var Blog = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    post: '',
  },
});

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/D9blog',
});

module.exports = {
  'Blog': Blog,
  'BlogCollection': BlogCollection,
}
