var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/firepadtest', function(req, res){
  res.render('firepad');
});

router.get('/firepad-users', function(req, res){
  res.render('firepad2');
});

router.get('/firepad-simple', function(req, res){
  res.render('firepad-simple');
});


module.exports = router;
