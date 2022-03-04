var mysqlConf = require('./db').mysql_pool;

let postsdb = {};

// Post a comment
postsdb.one = (name, comment) => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query('INSERT INTO league.posts (name, comment) VALUES (?, ?)', [name, comment], (err, results) => {
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

// Retrieve all Posts
postsdb.all = () => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query(`SELECT * FROM ${process.env.MYSQLDATABASE}.posts`, (err, results) => {
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

// Retrieve a comment
postsdb.rone = (id) => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query(`SELECT * FROM ${process.env.MYSQLDATABASE}.posts where id = ?`, [id], (err, results) => {
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

// Update a comment
postsdb.update = (name, comment, id) => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query(`UPDATE ${process.env.MYSQLDATABASE}.posts SET name = ?, comment = ? where id = ?`, [name, comment, id], (err, results) => {
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

// Delete a comment
postsdb.delete = (id) => {
    return new Promise((resolve, reject) => {
        mysqlConf.getConnection((err, connection) => {
            connection.query(`DELETE FROM ${process.env.MYSQLDATABASE}.posts where id = ?`, [id], (err, results) => {
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

module.exports = postsdb;