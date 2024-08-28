const express = require('express');
const route = express.Router();
const ag_controller = require('../controller/agency_controller')

route.get( '/', ag_controller.getAgency);

route.post('/', ag_controller.saveAgency);

route.put('/', ag_controller.updateAgency);

route.delete('/:id', ag_controller.deleteAgency);

module.exports = route