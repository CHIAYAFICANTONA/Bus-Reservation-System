const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors')
const ag_route = require('./src/route/agency_route')
const bu_route = require('./src/route/bus_route');
const ho_route = require('./src/route/hotel_route');
const us_route = require('./src/route/user_route');
const pa_route = require('./src/route/payment_route');
const re_route = require('./src/route/reservation_route');
const ro_route = require('./src/route/room_route');
const se_route = require('./src/route/seat_route');
const ti_route = require('./src/route/ticket_route');
const urb_route = require('./src/route/userroombooking_route');
const auth_route = require('./src/route/auth_route');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

app.use('/agency', ag_route);
app.use('/auth', auth_route);
app.use('/bus', bu_route);
app.use('/hotel', ho_route);
app.use('/user', us_route);
app.use('/payment', pa_route);
app.use('/reservation', re_route);
app.use('/room', ro_route);
app.use('/seat', se_route);
app.use('/ticket', ti_route);
app.use('/userroombooking', urb_route);
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  });
