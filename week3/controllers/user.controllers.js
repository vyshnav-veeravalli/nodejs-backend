const express = require('express');

let users = [
    {id: 1, name: "vyshnav"},
    {id: 2, name: "sailaja"},
];

const getAllUsers = (req, res) => {
    res.json(users);
}

const addUser = (req, res) => {
    const { name } = req.body;
    if(!name){
        return res.status(400).json({error: "name is required"});
    }

    const newUser = {
        id: users.length +1,
        name
    };

    users.push(newUser);
    res.status(201).json(newUser);
};


const getUserId = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if(!user) return res.status(404).json({error: "user not found"});

    res.status(200).json(user);
};

const searchUserByQuery = (req, res) => {
    const { name } = req.query;
    if(!name) return res.status(400).json({error: "name is required"});

    const result = users.find(u => u.name.toLowerCase().includes(name.toLowerCase()));
    res.json(result);
};

const UpdateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;

    const userIndex = users.findIndex(u=>u.id === id);
    if(userIndex === -1){
        return res.status(404).json({error: "user not found"});
    }
    users[userIndex].name = name;
    res.json(users[userIndex]);
};

const DeleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    const userIndex = users.find(u=>u.id === id);
    if(userIndex === -1){
        return res.status(404).json({error: "user not found"});
    }

    const deleted = users.splice(userIndex, 1);
    res.json({message: "user deleted", deleted});
}

module.exports ={
    getAllUsers,
    addUser,
    getUserId,
    searchUserByQuery,
    UpdateUser,
    DeleteUser,

};