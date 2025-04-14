const express = require('express');

const {registerUser, login, profile} = require('../controller/user.controller.js');
const authMiddleware = require('../middleware/auth.middleware.js');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);
router.get('/profile', profile);

module.exports = router;    