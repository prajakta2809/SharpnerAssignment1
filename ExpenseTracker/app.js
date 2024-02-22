const express = require('express');
const app = express();
const port = 3000; // You can change this to your desired port
const sequelize = require('./config/database');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
const User=require('./model/signupModel');
const Expenses=require('./model/signupModel');
//-------------------------------------------------------------------------
const mainRoute=require('./routes/signup');
const loginRoute=require('./routes/login');
const expenseRoute=require('./routes/expense');
app.use('/',mainRoute);
app.use('/login',loginRoute);
app.use('/login/user',expenseRoute);


//-------------------------------------------------------------------------

User.hasMany(Expenses);
Expenses.belongsTo(User);



sequelize.sync({force:true}).then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });