var $ = require('jquery');
var Backbone = require('backbone');
var views = require('./views/contactview');
var ContactCollection = require('./models/contact').ContactCollection;

var contacts = new ContactCollection();

var contactForm = new views.ContactFormView({collection: contacts});
$('.app').append(contactForm.render().el);

var contactList = new views.ContactListView({collection: contacts});
$('.app').append(contactList.render().el);


contacts.fetch();
