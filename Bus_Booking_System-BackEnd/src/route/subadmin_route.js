const express = require('express');
const route = express.Router();
const sa_control = require('../controller/subadmin_control')

route.get( '/', sa_control.getsubadmins);

route.post('/subadmin', (req, res) => {
    let subadmin = { 
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
    let subadmin = { 
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

route.delete('/subadmin/:id', (req, res) => {
    let id = req.params.id;
    
    res.status(200).send(`deleted successfully id ${id}`)
});

module.exports = route