const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
})

connection.connect();

let abilitiesdb = {};

// Retrieve all Types of Skill from one Champion
abilitiesdb.all = (champion) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM league.abilities WHERE CHAMPION = ?', [champion], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

// Retrieve One Type of Skill from one Champion
abilitiesdb.one = (champion, skill) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM league.abilities WHERE CHAMPION = ? and TYPE = ?`, [champion, skill], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

module.exports = abilitiesdb;