const express=require('express');
const path=require('path');
const router= express.Router();
const rootDir=require('../helper/path');


router.get('/contactus',(req,res,next)=>{
    // console.log('This always runs!');
    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
    
 });

router.post('/success',(req,res,next)=>{
    res.send(`<h1>Successfully saved!</h1>`)
})
 module.exports=router;