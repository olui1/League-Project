var mysqlConf = require('./db').mysql_pool;

let postsdb = {};

// Post a comment
postsdb.one = (id, name, comment) => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query('INSERT INTO league.posts (id, name, comment) VALUES (?, ?, ?)', [id, name, comment], (err, results) => {
                if(err){
                    return reject(err);
                }
                return resolve(results);
            })
            connection.release();
        });  
    })
}

// Retrieve all Posts
postsdb.all = () => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query('SELECT * FROM league.posts', (err, results) => {
                if(err){
                    return reject(err);
                }
                return resolve(results);
            })
            connection.release();
        });  
    })
}

module.exports = postsdb;