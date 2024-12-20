var express = require('express');
var router = express.Router();

// Home Route
router.get('/', function(req, res) {
  res.render('home', { title: 'Home' });
});

// About Us Route
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Us' });
});

// Services Route
router.get('/services', function(req, res) {
  res.render('services', { title: 'Our Services' });
});

// Contact Route
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
