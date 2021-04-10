const { CollaboratorsService } = require('../services');

exports.getCollaborators = function (req, res) {
    CollaboratorsService.getCollaborators().then(function (result) {
        if (result) {
            return res.status(200).send({
                data: result
            })
        }
    }, function (error) {
        if (error) {
            return res.status(401).send({
                code: error.codeMessage,
                message: error.message
            })
        }
    })
}

exports.getCollaboratorById = function (req, res) {
    CollaboratorsService.getCollaboratorById(req.params.idCollaborator).then(function (result) {
        if (result) {
            return res.status(200).send({
                data: result
            })
        }
    }, function (error) {
        if (error) {
            return res.status(401).send({
                code: error.codeMessage,
                message: error.message
            })
        }
    })
}

exports.createCollaborator = function (req, res) {
    CollaboratorsService.createCollaborator(req.body).then(function (result) {
        if (result) {
            return res.status(200).send({
                data: result,
                message: 'Collaborator with id ' + result.insertId + ' created successfully',
                idPosition: result.insertId
            })
        }
    }, function (error) {
        if (error) {
            return res.status(401).send({
                code: error.codeMessage,
                message: error.message
            })
        }
    })
}

exports.updateCollaborator = function (req, res) {
    CollaboratorsService.updateCollaborator(req.body, req.params.idCollaborator).then(function (result) {
        if (result) {
            return res.status(200).send({
                data: result,
                message: result.affectedRows > 0 ? 'Collaborator with id ' + req.params.idCollaborator + ' updated successfully' : 'Collaborator with id ' + req.params.idCollaborator + ' does not exist',
            })
        }
    }, function (error) {
        if (error) {
            return res.status(401).send({
                code: error.codeMessage,
                message: error.message
            })
        }
    })
}

exports.deleteCollaborator = function (req, res) {
    CollaboratorsService.deleteCollaborator(req.params.idCollaborator).then(function (result) {
        if (result) {
            return res.status(200).send({
                data: result,
                message: result.affectedRows > 0 ? 'Collaborator with id ' + req.params.idCollaborator + ' deleted successfully' : 'Collaborator with id ' + req.params.idCollaborator + ' does not exist',
            })
        }
    }, function (error) {
        if (error) {
            return res.status(401).send({
                code: error.codeMessage,
                message: error.message
            })
        }
    })
}