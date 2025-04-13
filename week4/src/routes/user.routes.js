const express = require('express');
const {createUser, getUsers, getUserById, updateUser, deleteUser} = require('../controller/user.controller');
const validator = require('../middleware/validator.js');
const router = express.Router();

router.post('/', validator, createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', validator, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;