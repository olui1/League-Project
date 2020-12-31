var mysqlConf = require('./db').mysql_pool;

let abilitiesdb = {};

// Retrieve all Types of Skill from one Champion
abilitiesdb.all = (champion) => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query('SELECT * FROM league.abilities WHERE CHAMPION = ?', [champion], (err, results) => {
                if(err){
                    return reject(err);
                }
                return resolve(results);
            })
            connection.release();
        });  
    })
}

// Retrieve One Type of Skill from one Champion
abilitiesdb.one = (champion, skill) => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query(`SELECT * FROM league.abilities WHERE CHAMPION = ? and TYPE = ?`, [champion, skill], (err, results) => {
                if(err){
                    return reject(err);
                }
                return resolve(results);
            })
            connection.release();
        }); 
    })
}

module.exports = abilitiesdb;