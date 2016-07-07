var Backbone = require('backbone');
var $ = require('jquery');

var contactFormTemplate = require('../../templates/contact-form.hbs');
var contactListTemplate = require('../../templates/contact-entry.hbs');


var ContactFormView = Backbone.View.extend({
  tagName: 'form',
  template: contactFormTemplate,
  events: {
    'submit': 'contactForm',
  },
  render: function(){
    var renderedHTML = this.template();
    this.$el.html(renderedHTML);
    return this;
  },

  contactForm: function(event){
    event.preventDefault();
    this.collection.create({
      firstname: $('#firstname').val(),
      lastname: $('#lastname').val(),
      address: $('#address').val(),
      city: $('#city').val(),
      state: $('#state').val(),
      zip: $('#zip').val(),
      email: $('#email').val(),
    });
    $('#firstname').val('');
    $('#lastname').val('');
    $('#address').val('');
    $('#city').val('');
    $('#state').val('');
    $('#zip').val('');
    $('#email').val('');
  },
});

var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  template: contactListTemplate,

  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  },
});

var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-unstyled col-md-3',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(contact){
    var contactItem = new ContactItemView({model: contact});
    this.$el.append(contactItem.render().el);
  },
});

module.exports = {
  'ContactFormView': ContactFormView,
  'ContactListView': ContactListView,
  'ContactItemView': ContactItemView,
}
