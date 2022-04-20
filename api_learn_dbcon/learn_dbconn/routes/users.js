var express = require('express');
var router = express.Router();

//database connection
let dbConnection=require('./../database/conn').localConnect();


/* GET users listing. */
router.get('/', function(req, res, next) {

 dbConnection.query('SELECT * FROM api_learn.user_profile1',(error,results,fields)=>{
    if(error) throw error;
      res.send(results);
    
  });
  //res.send('respond with a resource');
});

module.exports = router;
