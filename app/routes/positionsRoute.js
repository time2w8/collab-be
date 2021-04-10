var express = require('express');
var router = express.Router();

//Import Positions Controller
var { PositionsController } = require('../controllers');

//Import Endpoints Contants
var { endpoints } = require('../constants');

const POSITIONS_URLS = endpoints.POSITIONS_URL

//GET POSITION LIST
router.get(POSITIONS_URLS.OPERATIONS.LIST, PositionsController.getPositions);

//GET POSITIONS BY ID
router.get(POSITIONS_URLS.OPERATIONS.GET_ONE, PositionsController.getPositionById);

//CREATE NEW POSITION
router.post(POSITIONS_URLS.OPERATIONS.SAVE, PositionsController.createPosition);

//UPDATE POSITION
router.put(POSITIONS_URLS.OPERATIONS.UPDATE, PositionsController.updatePosition);

//DELETE POSITION
router.delete(POSITIONS_URLS.OPERATIONS.DELETE, PositionsController.deletePosition);

module.exports = router;
