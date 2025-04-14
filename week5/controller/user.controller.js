const User = require('../model/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    const {name, age, email, password, role} = req.body;
    try{
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({error: "user already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({name, email, age, password: hashedPassword, role});
        await user.save();

        res.status(201).json({
            message: "User registered successfully",
            user: { 
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    }   
    catch(error){
        res.status(500).json({error: error.message});
    }
};


const login = async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({error: "user not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({error: "password incorrect"});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({message: "login successful", token});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};

const profile = async (req, res) => {
    res.json({message: "welcome to your profile", user: req.user});
};


module.exports = {registerUser, login, profile};