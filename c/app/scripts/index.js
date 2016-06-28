var $ = require('jquery');
var Backbone = require('backbone');
// var views = require('./views/blogview');
// var BlogCollection = require('./models/blog').BlogCollection;
var router = require('./router');


$(function(){
  Backbone.history.start();
});
// var blog = new BlogCollection();
//
// var blogList = new views.BlogListView({collection: blog});
// $('.app').append(blogList.render().el);
//
// blog.fetch();
