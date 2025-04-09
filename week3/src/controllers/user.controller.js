const express = require('express');
const router = express.Router();


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


const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if(!user){
        return res.status(404).json({error: "user not found"});
    }
    res.status(200).json(user);
};

const searchUserByQuery = (req, res) => {
    const {name} = req.query;
    if(!name){
        return res.status(400).json({error: "name is required"});
    }

    const result = users.find(u => u.name.toLowerCase().includes(name.toLowerCase()));
    res.json(result);
}


router.get('/', getAllUsers);
router.post('/', addUser);
router.get('/:id',getUserById);
router.get('/search/query/name', searchUserByQuery);






module.exports = router;