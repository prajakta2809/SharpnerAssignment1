const Sequelize = require('sequelize');
const sequelize = new Sequelize('expense','root','Prachi@2001',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;