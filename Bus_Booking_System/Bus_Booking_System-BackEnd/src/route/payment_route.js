const express = require('express');
const route = express.Router();
const pa_controller = require('../controller/payment_controller')

route.get( '/', pa_controller.getPayment);

route.post('/', pa_controller.savePayment);

route.put('/', pa_controller.updatePayment);

route.delete('/:id', pa_controller.deletePayment);

module.exports = route