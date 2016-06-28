var $ = require('jquery');
var Backbone = require('backbone');
var views = require('./views/blogview');
var models = require('./models/blog');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'detail/:id/': 'detail'
  },

  initialize: function(){
    this.collection = new models.BlogCollection();
  },

  index: function(){
    var blogForm = new views.BlogFormView({collection: this.collection});
    $('.app').html(blogForm.render().el);

    var blogListing = new views.BlogListView({collection: this.collection});
    $('.app').append(blogListing.render().el);

    this.collection.fetch();
  },

  detail: function(blogId){
    this.collection.fetch().done(function(){
      var blog = this.collection.get(blogId);
      var blogDetail = new views.BlogDetailView({model: blog});
      $('.app').html(blogDetail.render().el);
    }.bind(this));
  },
});

var router = new Router();


module.exports = router;
