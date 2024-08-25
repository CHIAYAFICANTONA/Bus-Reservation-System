const express = require('express');
const route = express.Router();
const urb_controller = require('../controller/userroombooking_controller')

route.get( '/', urb_controller.getUserRoomBooking);

route.post('/', urb_controller.saveUserRoomBooking);

route.put('/', urb_controller.updateUserRoomBooking);

route.delete('/:id', urb_controller.deleteUserRoomBooking);

module.exports = route