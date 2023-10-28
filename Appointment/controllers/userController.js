const User = require('../models/User');

module.exports = {
    createUser: (data) => {
        return User.create(data);
    },

    getAllUsers: () => {
        return User.findAll();
    },

    deleteUserById: (id) => {
        return User.destroy({ where: { id } });
    },
};
