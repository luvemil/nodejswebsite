var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/video', function(req, res){
  res.render('viewer', {
    title: 'Player',
    videoid: 'jZxzz-N3oxM'
  });
});

router.get('/video/:videoid', function(req, res){
  var vid = req.params.videoid;
  res.render('viewer', {
    title: 'Player',
    videoid: vid
  });
});

module.exports = router;
