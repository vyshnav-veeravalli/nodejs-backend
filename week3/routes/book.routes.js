const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    addUser,
    getUserId,
    searchUserByQuery,
    UpdateUser,
    DeleteUser,
} = require('../controllers/user.controllers');

const Validator = require('../middleware/validateUser');


router.get('/', getAllUsers);
router.post('/', addUser);
router.get('/:id', getUserId);
router.get('/search/query/name', searchUserByQuery);
router.put('/:id', Validator, UpdateUser);
router.delete('/:id', DeleteUser);

module.exports = router;
