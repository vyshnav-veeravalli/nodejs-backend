const express = require('express');

const {registerUser, login, profile} = require('../controller/user.controller.js');
const authenticateToken = require('../middleware/auth.middleware.js');
const authorizeRole = require('../middleware/roleMiddleware.js');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);
router.get('/profile',authenticateToken, profile);
router.get('/admin-only', authorizeRole('admin'), (req, res) => {
    res.json({message: "hello admin, yu are authorized"});
});

module.exports = router;    