const bodyparser = require('body-parser');
const express = require('express');
const port = 3000;


const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', (req, res))

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  });