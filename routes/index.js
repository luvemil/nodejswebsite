var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/video', function(req, res){
  res.render('viewer', {
    title: 'Player'
  });
});

module.exports = router;
