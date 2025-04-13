const User = require('../models/user.model');

const createUser = async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    }
    catch (error){
        res.status(400).json({error: error.message});
    }
};

const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const getUserById = async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({error: "user not found"});
        }
        res.json(user);
    }
    catch{
        res.status(500).json({error: error.message});
    }
};

const updateUser = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if(!user){
            return res.status(404).json({error: "user not found"});
        }
        res.json(user);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};


const deleteUser = async (req, res) => {
    
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
        return res.status(404).json({error: "user not found"});
    }
    res.json({message: "user deleted", user});

    
};

module.exports = { createUser, getUsers, getUserById, deleteUser, updateUser};