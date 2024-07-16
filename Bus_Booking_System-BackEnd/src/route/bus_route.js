const express = require('express');
const route = express.Router();
const b_control = require('../controller/bus_control')

route.get( '/', b_control.getbuses);

route.post('/bus', (req, res) => {
    let bus = { 
        licensePlate,
        driverName
    } = req.body;
    
    res.status(201).send({ 
        'license plate' :licensePlate,
        'driver name' : driverName
    }).status(201)
});

    route.put('/bus', (req, res) => {
    let bus = { 
        licensePlate,
        driverName
    } = req.body;
    
    res.status(201).send({ 
        'update license plate' :licensePlate,
        'update driver name' : driverName
    })
});

route.delete('/bus/:id', (req, res) => {
    let id = req.params.id;
    
    res.status(200).send(`deleted successfully id ${id}`)
});

module.exports = route