const express = require('express');
const route = express.Router();
const se_controller = require('../controller/seat_controller');

route.get( '/', se_controller_controller.getSeat);

route.post('/', se_controller.saveSeat);

route.put('/', se_controller.updateSeat);

route.delete('/:id', se_controller.deleteSeat);

module.exports = route