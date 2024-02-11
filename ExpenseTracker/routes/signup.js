const express = require('express');
const router = express.Router();
const Expense = require('../model/signupModel');
//const loginRoute=require('../routes/login');
// router.post('/user/signup', (req, res) => {
//     const { name, email, password } = req.body;
//     Expense.create({ name, email, password })
//       .then(() => {
//         res.redirect('/');
//       })
//       .catch((err) => {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//       });
//   });

router.post('/user/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Check if email already exists
  Expense.findOne({ where: { email } })
    .then(existingUser => {
      if (existingUser) {
        // If email already exists, send a message to the frontend
       
        //return res.status(400).send('User already exists');
       
        res.render('signup',{message:"User already exists"});
      } else {
        // If email does not exist, create the user
        Expense.create({ name, email, password })
          .then(() => {
            res.redirect('/');
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
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
