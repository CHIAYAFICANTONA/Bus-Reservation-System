const express = require('express');
const route = express.Router();
const re_controller = require('../controller/reservation_controller')

route.get( '/', re_controller.getReservation);

route.post('/', re_controller.saveReservation);

route.put('/', re_controller.updateReservation);

route.delete('/:id', re_controller.deleteReservation);

module.exports = route