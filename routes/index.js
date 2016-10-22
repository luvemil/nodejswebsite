var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/about', function(req, res){
  res.render('index', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('index', {
    title: 'Contact'
  });
});

module.exports = router;
