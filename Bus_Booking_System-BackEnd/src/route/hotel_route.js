const express = require('express');
const route = express.Router();
const ho_controller = require('../controller/hotel_controller')

route.get( '/', ho_controller.getHotel);

route.post('/', ho_controller.saveHotel);

route.put('/', ho_controller.updateHotel);

route.delete('/:id', ho_controller.deleteHotel);

module.exports = route