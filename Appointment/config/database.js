// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'database.sqlite', // You can choose a different database like PostgreSQL or MySQL here
// });

// module.exports = sequelize;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('Users','root','TusharMinche@2003',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;