const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Expense = require('../model/signupModel');


router.post('/user/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Check if email already exists
  Expense.findOne({ where: { email } })
    .then(existingUser => {
      if (existingUser) {
       
        //return res.status(400).send('User already exists');
       
        res.render('signup',{message:"User already exists"});
      } else {
        bcrypt.hash(password,10,(err,hashedPassword)=>{
          if(err){
            console.error(err);
            return res.status(500).send('Internal Server Error');
          }
      
        // If email does not exist, create the user
        Expense.create({ name, email, password: hashedPassword })
          .then(() => {
            res.redirect('/');
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
          });
        });
      }
    
  })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

router.get('/', (req, res) => {
  res.render('signup', { message: null });
  });



  module.exports = router;
