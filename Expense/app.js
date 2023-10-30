const express = require('express');
const app = express();
const port = 3000; // You can change this to your desired port
const sequelize = require('./config/database');

// Define middleware
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Define routes
const expenseRoutes = require('./routes/expense');
app.use('/', expenseRoutes);

// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
