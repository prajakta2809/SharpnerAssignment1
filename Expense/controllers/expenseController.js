const Expense = require('../models/expense');

// Create expense
const createExpense = (quantity, description, category) => {
  return Expense.create({ quantity, description, category });
};

// Edit expense
const editExpense = (id, quantity, description, category) => {
  return Expense.update({ quantity, description, category }, { where: { id } });
};

// Delete expense
const deleteExpense = (id) => {
  return Expense.destroy({ where: { id } });
};

const getExpense = (id) => {
    return Expense.findByPk({ where: { id } });
  };

module.exports = {
  createExpense,
  editExpense,
  deleteExpense,
  getExpense
};
