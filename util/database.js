const mysql = require("mysql2");


// Create a connection pool

const pool = mysql.createPool({
    // host : 'localhost',
    host : '45.55.136.114',
    user : 'F2023_jbain01',
    // database : 'node-complete',
    database : 'F2023_jbain01',
    password: "Antelope12"
});

module.exports = pool.promise();