const express = require('express');
const route = express.Router();
const u_control = require('../controller/user_control')

route.get( '/', u_control.getadmins);

route.post('/user', (req, res) => {
    let user = { 
        name,
        email,
        phoneNumber,
        password 
    } = req.body;
    
    res.status(201).send({ 
        'name' :name,
        'email' :email,
        'tel' : phoneNumber,
        'password' : password
    }).status(201)
});

    route.put('/user', (req, res) => {
    let user = { 
        name,
        email,
        phoneNumber,
        password
    } = req.body;
    
    res.status(201).send({ 
        'update name' :name,
        'update email' :email,
        'update tel' :phoneNumber,
        'update password' :password
    })
});

route.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    
    res.status(200).send(`deleted successfully id ${id}`)
});

module.exports = route