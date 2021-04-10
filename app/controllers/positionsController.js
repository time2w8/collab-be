const { PositionsService } = require('../services');

exports.getPositions = function (req, res) {
    PositionsService.getPositions().then(function (result) {
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

exports.getPositionById = function (req, res) {
    PositionsService.getPositionById(req.params.idPosition).then(function (result) {
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

exports.createPosition = function (req, res) {
    PositionsService.createPosition(req.body).then(function (result) {
        if (result) {
            return res.status(200).send({
                data: result,
                message: 'Position with id ' + result.insertId + ' created successfully',
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

exports.updatePosition = function (req, res) {
    PositionsService.updatePosition(req.body, req.params.idPosition).then(function (result) {
        if (result) {
            return res.status(200).send({
                data: result,
                message: result.affectedRows > 0 ? 'Position with id ' + req.params.idPosition + ' updated successfully' : 'Position with id ' + req.params.idPosition + ' does not exist',
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

exports.deletePosition = function (req, res) {
    PositionsService.deletePosition(req.params.idPosition).then(function (result) {
        if (result) {
            return res.status(200).send({
                data: result,
                message: result.affectedRows > 0 ? 'Position with id ' + req.params.idPosition + ' deleted successfully' : 'Position with id ' + req.params.idPosition + ' does not exist',
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