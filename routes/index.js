var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/firepadtest', function(req, res){
  res.render('firepad');
});

module.exports = router;
