const { mysqlConnection } = require('../connections/mysql');

exports.getCollaborators = function () {
    return new Promise(function (resolve, reject) {
        mysqlConnection.query({
            sql: 'SELECT collab.id, collab.firstName, collab.lastName, collab.email, collab.salary, ' +
                "IF(LOCATE(' ',collab.lastName) <> 0, CONCAT(SUBSTRING(collab.lastName,1,LOCATE(' ',collab.lastName)),CONCAT(SUBSTRING(collab.lastName, LOCATE(' ',collab.lastName) + 1, 1), '.')), collab.lastName) as formattedLastName," +
                "IF(collab.salary < 500, 'Muy Bajo', IF(collab.salary < 1001, 'Bajo', IF(collab.salary < 1501, 'Medio', IF(collab.salary < 1901, 'Alto', 'Muy Alto')))) as state," +
                'pos.id as idPosition, pos.name as positionName, pos.active as positionStatus ' +
                'FROM collaborators as collab ' +
                'JOIN positions as pos ON pos.id = collab.idPosition ' +
                'ORDER BY collab.salary DESC',
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

exports.getCollaboratorById = function (idCollaborator) {
    return new Promise(function (resolve, reject) {
        mysqlConnection.query({
            sql: 'SELECT collab.id, collab.firstName, collab.lastName, collab.email, collab.salary, ' +
                'pos.id as idPosition, pos.name as positionName, pos.active as positionStatus ' +
                'FROM collaborators as collab ' +
                'JOIN positions as pos ON pos.id = collab.idPosition ' +
                'WHERE collab.id = ?',
        }, [idCollaborator], function (error, result, fields) {
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

exports.createCollaborator = function (objCollaborator) {
    return new Promise(function (resolve, reject) {
        mysqlConnection.query({
            sql: 'INSERT INTO collaborators (firstName, lastName, email, salary, idPosition) VALUES (?,?,?,?,?)',
        }, [objCollaborator.firstName, objCollaborator.lastName, objCollaborator.email, objCollaborator.salary, objCollaborator.idPosition], function (error, result, fields) {
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

exports.updateCollaborator = function (objCollaborator, idCollaborator) {
    return new Promise(function (resolve, reject) {
        mysqlConnection.query({
            sql: 'UPDATE collaborators SET firstName = ?, lastName = ?, email = ?, salary = ?, idPosition = ? WHERE id = ?',
        }, [objCollaborator.firstName, objCollaborator.lastName, objCollaborator.email, objCollaborator.salary, objCollaborator.idPosition, idCollaborator], function (error, result, fields) {
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

exports.deleteCollaborator = function (idCollaborator) {
    return new Promise(function (resolve, reject) {
        mysqlConnection.query({
            sql: 'DELETE FROM collaborators WHERE id = ?',
        }, [idCollaborator], function (error, result, fields) {
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