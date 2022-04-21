var express = require('express');
var router = express.Router();

let dbConnection = require('./../database/config').localConnect();


/* GET users listing. */
router.get('/list', function (req, res, next) {

  dbConnection.query('SELECT * FROM support.createticket', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });
  //res.send('respond with a resource');
});

//post method
router.post('/list', (req, res, next) => {
  let{
   title,
   detail,
   priority
}=req.body

  let insertquery= `INSERT INTO support.createticket
  (title,detail,priority)
   VALUES ('${title}','${detail}','${priority}')`;

  dbConnection.query(insertquery,(err,result)=>{
    if(err){
      res.send(err);
      throw error;
    }
    else{
res.send('ticket details added');
    }
    
  });
})

router.get('/list', function (req, res, next) {

  dbConnection.query('SELECT * FROM support.createticket', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });
  //res.send('respond with a resource');
});

module.exports = router;
