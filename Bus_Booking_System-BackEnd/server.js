const bodyparser = require('body-parser');
const express = require('express');
const a_route = require('./src/route/admin_route');
const b_route = require('./src/route/bus_route');
const h_route = require('./src/route/hotel_route');
const sa_route = require('./src/route/subadmin_route');
const u_route = require('./src/route/user_route');
const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

app.use('/admin', a_route);
app.use('/bus', b_route);
app.use('/hotel', h_route);
app.use('/subadmin', sa_route);
app.use('/user', u_route);
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  });