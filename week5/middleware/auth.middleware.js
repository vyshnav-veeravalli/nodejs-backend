const jwt = require('jsonwebtoken');
const User = require('../model/user.model.js');

const auth = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer', '');
    if(!token){
        return res.status(401).json({error: "no token provided"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(404).json({error: "user not found"});
        }

        req.user = user;
        next(); 
    }
    catch(error){
        return res.status(404).json({error: "invalid or expired token"});
    }
};

module.exports = auth;