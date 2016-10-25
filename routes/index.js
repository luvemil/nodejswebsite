var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/video', function(req, res){
  res.render('viewer', {
    title: 'SyncPlayer',
    videoid: 'jZxzz-N3oxM'
  });
});

router.get('/video/:videoid', function(req, res){
  var vid = req.params.videoid;
  res.render('viewer', {
    title: 'SyncPlayer',
    videoid: vid
  });
});

var sdata = require('../bin/www')

router.get('/current', function(req, res){
  res.render('viewer', {
    title: 'SyncPlayer',
    videoid: sdata.currentvid
  });
});

module.exports = router;
