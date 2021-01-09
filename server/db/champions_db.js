var mysqlConf = require('./db').mysql_pool;

let championsdb = {};

// Retrieve Champion list
championsdb.all = () => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query('SELECT * FROM league.champions', (err, results) => {
                if(err){
                    return reject(err);
                }
                return resolve(results);
            })
            connection.release();
        });  
    })
}

module.exports = championsdb;