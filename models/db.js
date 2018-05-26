var mysql = require('mysql');

let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'node',
    port: '3306'
})

module.exports = pool;
