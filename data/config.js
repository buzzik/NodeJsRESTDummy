const mysql = require('mysql');
// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'restapi',
    password: 'password',
    database: 'restapi',
};

// Create a MySQL pool
const pool = mysql.createPool(config);
// Export the pool
module.exports = pool;