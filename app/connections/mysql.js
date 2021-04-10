var mysql = require('mysql');
const { database } = require('../constants');
var connection = mysql.createConnection({
    host: database.HOST,
    user: database.USER,
    password: database.PASSWORD,
    database: database.DATABASE,
    timeout: database.TIMEOUT,
    supportBigNumbers: true,
    bigNumberStrings: true
});

module.exports = {
    mysqlConnection: connection
};