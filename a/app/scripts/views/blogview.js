var Backbone = require('backbone');
var $ = require('jquery');
var blogFormTemplate = require('../../templates/blogform.hbs');

var BlogFormView = Backbone.View.extend({
  tagName: 'form',
  template: blogFormTemplate,
  events: {
    'submit': 'blogForm',
  },
  render: function(){
    var renderedHTML = this.template();
    this.$el.html(renderedHTML);
    return this;
  },

  blogForm: function(event){
    event.preventDefault();
    this.collection.create({
      title: $('#title').val(),
      post: $('#post').val(),
    });
    $('#title').val('');
    $('#post').val('');
  },
});

module.exports = {
  'BlogFormView': BlogFormView,
}
