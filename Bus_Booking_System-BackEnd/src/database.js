const mysql = require('mysql2');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bus_management_system'
}).promise();

module.exports = connection