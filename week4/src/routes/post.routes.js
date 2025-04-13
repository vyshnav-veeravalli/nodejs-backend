const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const {createPost, getPost} = require('../controller/post.controller');

router.post('/', createPost);
router.get('/', getPost);

module.exports = router;