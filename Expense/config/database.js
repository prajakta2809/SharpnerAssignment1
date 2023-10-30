
const Sequelize = require('sequelize');
const sequelize = new Sequelize('Expense','root','TusharMinche@2003',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;