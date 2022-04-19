var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//added post method
router.post('/profile', function(req, res, next) {
  res.send('I am in user profile in post method');
});

module.exports = router;
