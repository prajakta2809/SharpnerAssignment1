const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Expense = require('../model/signupModel');
const loginRoute = require('../routes/login');

router.post('/user', (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    Expense.findOne({ where: { email } })
        .then(existingUser => {
            if (!existingUser) {
                return res.status(404).send('Email does not exist');
            }

            // Compare passwords
            bcrypt.compare(password, existingUser.password, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Internal Server Error');
                }
                if (!result) {
                    return res.status(401).send('Invalid password');
                } else {
                    return res.render('login', { message: 'Login success', flag: false });
                }
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
});

router.get('/', (req, res) => {
    res.render('login', { message: null, flag: false });
});

module.exports = router;
