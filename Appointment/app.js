const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const sequelize = require('./config/database');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const User = require('./models/User');
sequelize.sync();

app.use('/', require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
