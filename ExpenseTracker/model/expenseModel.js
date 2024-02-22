const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ExpenseData = sequelize.define('expense', {
    exp_amt: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ExpenseData;
