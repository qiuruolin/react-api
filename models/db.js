var mysql = require('mysql');

let pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'node',
    port: '3306'
})

module.exports = pool;
