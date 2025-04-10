const Validator = (req, res, next) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({error: "name is also required"});
    }

    next();
};

module.exports = Validator;