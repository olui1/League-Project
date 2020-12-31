const mysql = require('mysql');

var connection = {
    mysql_pool : mysql.createPool({
        host: process.env.MYSQLHOST,
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE})
}

module.exports = connection;