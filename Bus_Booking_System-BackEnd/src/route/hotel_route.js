const express = require('express');
const route = express.Router();
const h_control = require('../controller/hotel_control')

route.get( '/', h_control.gethotels);

route.post('/hotel', (req, res) => {
    let hotel = { 
        name,
        location
    } = req.body;
    
    res.status(201).send({ 
        'name' :name,
        'location' :location
    }).status(201)
});

    route.put('/hotel', (req, res) => {
    let hotel = { 
        name,
        location
    } = req.body;
    
    res.status(201).send({ 
        'update name' :name,
        'update location' :location
    })
});

route.delete('/hotel/:id', (req, res) => {
    let id = req.params.id;
    
    res.status(200).send(`deleted successfully id ${id}`)
});

module.exports = route