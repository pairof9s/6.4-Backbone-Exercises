var $ = require('jquery');
var views = require('./views/blogview');
var BlogCollection = require('./models/blog').BlogCollection;

var blogPost = new BlogCollection();

var blogForm = new views.BlogFormView({collection: blogPost});
$('.app').append(blogForm.render().el);

blogPost.fetch();
