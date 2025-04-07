let users = [
    {id: 1, name: 'sailaja'},
    {id: 2, name: 'vyshnav'}
];

const getAllUsers = (req, res) => {
    res.json(users)
};

const addUser = (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({error: 'name is required'});
    }

    const newuser ={
        id: users.length + 1,
        name
    };

    users.push(newuser);
    res.status(201).json(newuser);
};



module.exports = {getAllUsers, addUser};