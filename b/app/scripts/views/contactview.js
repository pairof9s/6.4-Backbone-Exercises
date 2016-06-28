var Backbone = require('backbone');
var $ = require('jquery');
var contactFormTemplate = require('../../templates/contact-form.hbs');

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

module.exports = {
  'ContactFormView': ContactFormView,
}
