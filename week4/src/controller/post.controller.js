const Post = require('../models/post.model');


const createPost = async (req, res) => {
    try{
        const post = await Post.create(req.body);
        res.status(201).json(post);
    }
    catch(error){
        res.status(400).json({error: error.meassge});
    }
};

const getPost = async(req, res) => {
    try{
        const post = await Post.find().populate('user');
        res.status(201).json(post);
    }
    catch (error){
        res.status(400).json({error: error.message});
    }
};

module.exports = {createPost, getPost};