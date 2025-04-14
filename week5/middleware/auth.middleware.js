const jwt = require('jsonwebtoken');
const User = require('../model/user.model.js');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(404).json({error: "no token is provided"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');
        req.user = user;
        next();
    }
    catch(error){
        res.status(401).json({error: "Invalid Token"});
    }
};

module.exports = authMiddleware;