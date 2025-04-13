const validator = (req, res, next) => {
    const { name, age, email } = req.body;
    if(!name || !age || !email){
        return res.status(400).json({error: "name, email, age is required"});
    }
    if(typeof age !== "number" || age<=0){
        return res.status(400).json({error: "enter correc age"});
    }
    next();
};

module.exports = validator;