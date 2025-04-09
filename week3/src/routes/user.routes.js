const express = require('express');
const router = express.Router();

let users = [
    {id: 1, name: "sailaja"},
    {id: 2, name: "vyshnav"},
];

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({error: "name is required"});
    }

    const newUser = {
        id: users.length + 1,
        name,
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if(!user){
        return res.status(404).json({error: "user not found"});
    }

    res.status(200).json(user);
});

router.get('/search/query', (req, res) => {
    const { name } = req.query;

    if(!name){
        return res.status(400).json({error: "name is required"});
    }

    const user = users.find(u => u.name.toLowerCase().includes(name.toLowerCase()));

    if(!user){
        return res.status(404).json({error: "user not found"});
    }

    res.json(user);
});

module.exports = router;