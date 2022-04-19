var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//added profile 
router.get('/profiles', function(req, res, next) {
  res.render('profile', { title: 'Profile ', name: 'Yugh' ,company:'THBS',age:'23'});
});

module.exports = router;
