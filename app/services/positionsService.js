const { mysqlConnection } = require('../connections/mysql');

exports.getPositions = function () {
    return new Promise(function (resolve, reject) {
        mysqlConnection.query({
            sql: 'SELECT id, name, active FROM positions',
        }, function (error, result, fields) {
            if (result) {
                resolve(result);
            }
            if (error) {
                console.log(error);
                reject({
                    codeMessage: error.code ? error.code : 'ER_',
                    message: error.sqlMessage ? error.sqlMessage : 'Connection Failed'
                })
            }
        })
    })
}

exports.getPositionById = function (idPosition) {
    return new Promise(function (resolve, reject) {
        mysqlConnection.query({
            sql: 'SELECT id, name, active FROM positions where id = ?',
        }, [idPosition], function (error, result, fields) {
            if (result) {
                resolve(result);
            }
            if (error) {
                console.log(error);
                reject({
                    codeMessage: error.code ? error.code : 'ER_',
                    message: error.sqlMessage ? error.sqlMessage : 'Connection Failed'
                })
            }
        })
    })
}

exports.createPosition = function (objPosition) {
    return new Promise(function (resolve, reject) {
        mysqlConnection.query({
            sql: 'INSERT INTO positions (name) VALUES (?)', // field active is always true on creation
        }, [objPosition.name], function (error, result, fields) {
            if (result) {
                resolve(result);
            }
            if (error) {
                console.log(error);
                reject({
                    codeMessage: error.code ? error.code : 'ER_',
                    message: error.sqlMessage ? error.sqlMessage : 'Connection Failed'
                })
            }
        })
    })
}

exports.updatePosition = function (objPosition, idPosition) {
    return new Promise(function (resolve, reject) {
        mysqlConnection.query({
            sql: 'UPDATE positions SET name = ?, active = ? WHERE id = ?',
        }, [objPosition.name, objPosition.active, idPosition], function (error, result, fields) {
            if (result) {
                resolve(result);
            }
            if (error) {
                console.log(error);
                reject({
                    codeMessage: error.code ? error.code : 'ER_',
                    message: error.sqlMessage ? error.sqlMessage : 'Connection Failed'
                })
            }
        })
    })
}

exports.deletePosition = function (idPosition) { // JUST DISABLE POSITION, NO CASCADE OPERATION
    return new Promise(function (resolve, reject) {
        mysqlConnection.query({
            sql: 'UPDATE positions SET active = 0 WHERE id = ?',
        }, [idPosition], function (error, result, fields) {
            if (result) {
                resolve(result);
            }
            if (error) {
                console.log(error);
                reject({
                    codeMessage: error.code ? error.code : 'ER_',
                    message: error.sqlMessage ? error.sqlMessage : 'Connection Failed'
                })
            }
        })
    })
}