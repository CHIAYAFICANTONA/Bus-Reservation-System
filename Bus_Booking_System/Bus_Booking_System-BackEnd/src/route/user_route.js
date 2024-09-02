const express = require('express');
const route = express.Router();
const us_controller = require('../controller/user_controller')

route.get( '/', us_controller.getUsers);

route.post('/', us_controller.saveUsers);

route.put('/', us_controller.updateUsers);

route.delete('/:id', us_controller.deleteUsers);

module.exports = route