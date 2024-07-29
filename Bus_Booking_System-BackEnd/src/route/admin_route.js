const express = require('express');
const route = express.Router();
const ad_controller = require('../controller/admin_controller')

route.get( '/', ad_controller.getAdmin);

route.post('/', ad_controller.saveAdmin);

route.put('/', ad_controller.updateAdmin);

route.delete('/:id', ad_controller.deleteAdmin);

module.exports = route