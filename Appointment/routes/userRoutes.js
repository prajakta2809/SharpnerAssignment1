const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
    userController.getAllUsers()
        .then(users => {
            res.render('index', { users });
        })
        .catch(error => {
            res.status(500).send('Error: ' + error);
        });
});

router.post('/users', (req, res) => {
    const { name, email, phone } = req.body;

    userController.createUser({ name, email, phone })
        .then(user => {
            res.redirect('/');
        })
        .catch(error => {
            res.status(500).send('Error: ' + error);
        });
});

router.post('/users/:id', (req, res) => {
    const userId = req.params.id;
    
    // Add a function to delete the user by ID from the database using Sequelize
    userController.deleteUserById(userId)
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            res.status(500).send('Error: ' + error);
        });
});

module.exports = router;
