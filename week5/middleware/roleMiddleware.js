const jwt = require('jsonwebtoken');
const User = require('../model/user.model.js');

const authorizeRole = (...roles) => {
    return async (req, res, next) => {
        try{
            const token = req.headers.authorization?.split(' ')[1];
            if (!token){
                return res.status(401).json({error: "No token provide"});
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id);

            if(!roles.includes(user.role)){
                return res.status(403).json({error: "access denied"});
            }

            req.user = user;
            next();
        }
        catch(error){
            res.status(401).json({error: "invalid token"});
        }
    };
};

const checkRole = (requiredRole) => {
    return (req, res, next) => {
        if(req.user.role !== requiredRole){
            return res.status(4033).json({error: "access denied, insufficieant role"});
        }
        next();
    }
};







module.exports = authorizeRole, checkRole;