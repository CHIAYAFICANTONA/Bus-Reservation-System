const express = require('express');
const route = express.Router();
const ti_controller = require('../controller/ticket_controller');

route.get( '/', ti_controller.getTicket);

route.post('/', ti_controller.saveTicket);

route.post('/', ti_controller.verifyTicket)

route.put('/', ti_controller.updateTicket);

route.delete('/:id', ti_controller.deleteTicket);

module.exports = route
