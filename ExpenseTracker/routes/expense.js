const express = require('express');
const router = express.Router();

const Expense = require('../model/expenseModel');

router.post('/expense', (req, res) => {
    const { exp_amt, description, category } = req.body;
    Expense.create({ exp_amt, description, category})
      .then((expenseList) => {
      
        res.redirect('/login/user/expense');
      })
      .catch((err) => {
        res.status(500).send('Error adding  expense'+err);
      });
  });

router.get('/expense', (req, res) => {
    Expense.findAll()
      .then((expenseList) => {
        res.render('expense',{expenseList});
      })
      .catch((err) => {
        console.error('Error fetching expenses:', err);
        res.status(500).send('Error fetching expenses');
      });
  });

//delete
  router.get('/expense/delete/:id', (req, res) => {
    const { id } = req.params;
    Expense.destroy({ where: { id } })
      .then(() => {
        res.redirect('/login/user/expense');
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  });
  module.exports = router;
