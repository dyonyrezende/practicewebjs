const mysql = require('mysql2');


const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    database: 'restaurant',
    password: ''

});


module.exports = connection;