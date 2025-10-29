var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/projects', (req, res) => {
  res.render('projects');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
