const express=require('express')
const app=express();
const port=3000

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/profile',(req,res)=>{
    res.send('I am in profile page ')
})

app.post('/',(req,res)=>{
    res.send('I am in post request')
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})