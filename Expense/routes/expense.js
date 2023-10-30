const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');
const expenseController=require('../controllers/expenseController')
// Create expense
router.post('/add', (req, res) => {
  const { quantity, description, category } = req.body;
  Expense.create({ quantity, description, category })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

// Edit expense
router.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { quantity, description, category } = req.body;
    expenseController.editExpense(id, quantity, description, category)
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  });

// Delete expense
router.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  Expense.destroy({ where: { id } })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});


router.get('/', (req, res) => {
    Expense.findAll()
      .then((expenses) => {
        res.render('index', { expenses });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  });

  router.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    Expense.findByPk(id)
      .then((expense) => {
        res.render('edit', { expense });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  });
module.exports = router;
