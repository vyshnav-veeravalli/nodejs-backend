const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.middleware');
const checkRole = require('../middleware/roleMiddleware');

router.get('/dashboard', auth, checkRole('admin'), (req, res) => {
    res.json({message: "welcome to admin dashboard", user:req.user});
});

module.exports = router;