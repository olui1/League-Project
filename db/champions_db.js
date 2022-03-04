var mysqlConf = require('./db').mysql_pool;

let championsdb = {};

// Retrieve Champion list
championsdb.all = () => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query(`SELECT * FROM ${process.env.MYSQLDATABASE}.champions`, (err, results) => {
                if(err){
                    return reject(err);
                }
                return resolve(results);
            })
            connection.release();
        });  
    })
}

// Retrieve a Champion
championsdb.one = (champion) => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query('SELECT * FROM league.champions where Champions = ?', [champion], (err, results) => {
                if(err){
                    return reject(err);
                }
                return resolve(results);
            })
            connection.release();
            if(err) throw err;
        });  
    })
}

module.exports = championsdb;