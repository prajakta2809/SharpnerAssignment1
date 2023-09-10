const express=require('express');
const router= express.Router();


router.get('/',(req,res,next)=>{
    // console.log('This always runs!');
    res.send('<h1>Hello from express</h1>');
    next();
 });

 module.exports=router;