var app=require('express')

let router=app.Router();

//localhost:3000/payment/process
router.get('/process',(req,res)=>{
    res.send({
        price:200,
        label:'INR'
    })
});

module.exports=router;