const express = require('express');
const route = express.Router();
const a_control = require('../controller/admin_control')

route.get( '/', a_control.getadmins);

route.post('/admin', (req, res) => {
    let admin = { 
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

    route.put('/admin', (req, res) => {
    let admin = { 
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

route.delete('/admin/:id', (req, res) => {
    let id = req.params.id;
    
    res.status(200).send(`deleted successfully id ${id}`)
});

module.exports = route