const express = require('express');
const router = express.Router();
const Expense = require('../model/signupModel');
const loginRoute=require('../routes/login');

router.post('/user',(req,res)=>{
    const {email,password}=req.body;
    Expense.findOne({where:{email}})
    .then(existingEmail=>{
        if(!existingEmail){
            res.render('login',{message:'Email does not exists',flag:true})
        }
    })
    Expense.findOne({where:{email,password}})
    .then(existingUser=>{
        if(!existingUser){
            
            return res.render('login',{message:'Invalid password',flag:false});
        }
        else{
            return res.render('login',{message:'Login success',flag:false});
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
    
});

router.get('/',(req,res)=>{
    res.render('login',{message:null,flag:false});
});

module.exports = router;