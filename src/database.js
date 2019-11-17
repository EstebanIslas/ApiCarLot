const mysql = require('mysql');
const {database} = require('./keys');
const {promisify} = require('util');

const pool = mysql.createPool(database);

pool.getConnection((err, connection)=>{
    if (err) {
        console.log('Found an Error: ', err);
    }

    if (connection) {
        connection.release();
        console.log('DataBase has been conected succesfully');
        return;
    }
}); 

pool.query = promisify(pool.query);
module.exports = pool;