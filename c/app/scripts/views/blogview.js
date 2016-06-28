var $ = require('jquery');
var Backbone = require('backbone');
var blogItemTemplate = require('../../templates/bloglist.hbs');
var formTemplate = require('../../templates/blogform.hbs');
var blogDetailTemplate = require('../../templates/blogdetail.hbs');


var BlogFormView = Backbone.View.extend({
  tagName: 'form',
  template: formTemplate,
  events: {
    'submit': 'addBlog'
  },
  render: function(){
    var renderedHtml = this.template();
    this.$el.html(renderedHtml);
    return this;
  },
  addBlog: function(event){
    event.preventDefault();
    this.collection.create({
      name: $('#name').val(),
      url: $('#url').val()
    });
    $('#name').val('');
    $('#url').val('');
  },
});

var BlogListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  render: function(){
    return this;
  },
  renderItem: function(blog){
    console.log('blog', blog);
    var blogItem = new BlogItemView({model: blog});
    this.$el.append(blogItem.render().el);
  }
});

var BlogItemView = Backbone.View.extend({
  tagName: 'li',
  template: blogItemTemplate,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

var BlogDetailView = Backbone.View.extend({
  template: blogDetailTemplate,
  render: function(){
    this.$el.html('<img src="' + this.model.get('url') + '"/>').append(this.template);
    return this;
  }
});

module.exports = {
  'BlogFormView': BlogFormView,
  'BlogListView': BlogListView,
  'BlogItemView': BlogItemView,
  'BlogDetailView': BlogDetailView
}
