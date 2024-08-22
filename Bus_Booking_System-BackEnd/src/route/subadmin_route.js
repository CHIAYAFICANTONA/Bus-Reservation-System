const express = require('express');
const route = express.Router();
const sa_controller = require('../controller/subadmin_controller')

route.get( '/', sa_controller.getSubadmin);

route.post('/', sa_controller.saveSubadmin);

route.put('/', sa_controller.updateSubadmin);

route.delete('/:id', sa_controller.deleteSubadmin);

module.exports = route