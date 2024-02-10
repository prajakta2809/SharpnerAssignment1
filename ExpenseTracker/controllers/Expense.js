const Expense = require('../models/expense');

const createExpense = (quantity, description, category) => {
    return Expense.create({ quantity, description, category });
  };

  
  module.exports = {
    createExpense,
   
  };
  