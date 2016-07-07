var $ = require('jquery');
var Backbone = require('backbone');
var _ = required('underscore');

var listTemplate = require('../../templates/addresslist.hbs');
var formTemplate = require('../../templates/addressform.hbs');
var detailTemplate = require('../../templates/addressdetail.hbs');
var tagTemplate = require('../../templates/taglist.hbs');

var AddressFormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    'submit': 'addAddress'
  },
  render: function(){
    var renderedHtml = this.template();
    this.$el.html(renderedHtml);
    return this;
  },
  addAddress: function(event){
    event.preventDefault();
    this.collection.create({
      title: $('#title').val(),
      url: $('#url').val(),
      tag: $('#tag').val(),
    });
    $('#title').val('');
    $('#url').val('');
    $('#tag').val('');
  },
});

var AddressItemView = Backbone.View.extend({
  tagName: 'li',
  template: listTemplate,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

var AddressListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(address){
    //console.log('address', address);
    var addressItem = new AddressItemView({model: address});
    this.$el.append(addressItem.render().el);
  }
});

var AddressDetailView = Backbone.View.extend({
  template: detailTemplate,
  render: function(){
    this.$el.html('').append(this.template);
    return this;
  }
});

var TagItemView = Backbone.View.extend({
  tagName: 'li',
  template: tagTemplate,
  render: function(){
    var newTag = this.model.toJSON();
    this.$el.html(this.template(newTag));
    return this;
  }
});

var TagListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderTag);
  },
  tagSelected: function(event){
    var tags = $('#tag').val('');
    var models = _.filter(this.collection.models,function(model){
     return tags.indexOf(model.get('#tag')) >= 0;
    }),
    this.collection.reset(models);
    this.render(models);
  },
  render: function(){
    return this;
  },
  renderTag: function(tag){
    var tagItem = new TagItemView({model: tag});
    this.$el.append(tagItem.render().el);
  },

});

module.exports = {
  'AddressFormView': AddressFormView,
  'AddressListView': AddressListView,
  'AddressItemView': AddressItemView,
  'AddressDetailView': AddressDetailView,
  'TagListView': TagListView
};
