const express = require('express');
const route = express.Router();
const ro_controller = require('../controller/room_controller')

route.get( '/', ro_controller_controller.getRoom);

route.post('/', ro_controller.saveRoom);

route.put('/', ro_controller.updateRoom);

route.delete('/:id', ro_controller.deleteRoom);

module.exports = route