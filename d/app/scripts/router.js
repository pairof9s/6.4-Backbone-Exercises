var $ = require('jquery');
var Backbone = require('backbone');
var views = require('./views/addressview');
var models = require('./models/address');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'detail/:id/': 'detail'
  },

  initialize: function(){
    this.collection = new models.AddressCollection();
  },

  index: function(){
    var addressForm = new views.AddressFormView({collection: this.collection});
    $('.app').html(addressForm.render().el);

    var addressListing = new views.AddressListView({collection: this.collection});
    $('.app').append(addressListing.render().el);

    var tagListing = new views.TagListView({collection: this.collection});
    $('.app').append(tagListing.render().el);

    this.collection.fetch();
  },

  detail: function(addressId){
    this.collection.fetch().done(function(){
      var address = this.collection.get(addressId);
      var addressDetail = new views.AddressDetailView({model: address});
      $('.app').html(addressDetail.render().el);
    }.bind(this));
  },
});

var router = new Router();

module.exports = router;
