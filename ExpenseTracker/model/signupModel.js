const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Expense = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Expense;
