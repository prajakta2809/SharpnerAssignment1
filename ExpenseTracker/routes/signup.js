const express = require('express');
const router = express.Router();
const Expense = require('../model/signupModel');

router.post('/user/signup', (req, res) => {
    const { name, email, password } = req.body;
    Expense.create({ name, email, password })
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  });

router.get('/', (req, res) => {
    res.render('signup')
  });

  module.exports = router;
