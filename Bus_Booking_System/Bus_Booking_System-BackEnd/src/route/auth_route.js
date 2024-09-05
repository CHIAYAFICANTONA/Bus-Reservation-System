const express = require('express');
const route = express.Router();
const auth_controller = require('../controller/auth_controller');

route.post('/signup', auth_controller.signup);
route.post('/signin', auth_controller.signin);

module.exports = route