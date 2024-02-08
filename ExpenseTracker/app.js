const express = require('express');
const app = express();
const port = 3000; // You can change this to your desired port
const sequelize = require('./config/database');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

//-------------------------------------------------------------------------
const mainRoute=require('./routes/signup');
app.use('/',mainRoute);

//-------------------------------------------------------------------------




sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });