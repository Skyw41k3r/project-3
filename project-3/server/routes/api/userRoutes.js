// Imports Express
const router = require('express').Router();

// All functions from User controller
const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    login,    
} = require('../../controllers/userController');

// Imports Middleware
const { authMiddleware } = require('../../utils/auth');

// Places authMiddleware wherever needed to send token for user verification
// /api/users routes for GET and POST 
router.route('/').get(getUsers).post(createUser);

// /api/login route for user login
router.route('/login').post(login);

// /api/:userId routes for GET, PUT, and DELETE
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;