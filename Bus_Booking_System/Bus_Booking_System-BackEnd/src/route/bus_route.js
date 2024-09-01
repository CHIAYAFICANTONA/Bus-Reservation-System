const express = require('express');
const route = express.Router();
const bu_controller = require('../controller/bus_controller')

route.get( '/', bu_controller.getBus);

route.post('/', bu_controller.saveBus);

route.put('/', bu_controller.updateBus);

route.delete('/:id', bu_controller.deleteBus);

module.exports = route