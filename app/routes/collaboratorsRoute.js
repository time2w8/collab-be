var express = require('express');
var router = express.Router();

//Import Collaborators Controller
var { CollaboratorsController } = require('../controllers');

//Import Endpoints Contants
var { endpoints } = require('../constants');

const COLLABORATORS_URLS = endpoints.COLLABORATORS_URL

//GET COLLABORATORS LIST
router.get(COLLABORATORS_URLS.OPERATIONS.LIST, CollaboratorsController.getCollaborators);

//GET COLLABORATOR BY ID
router.get(COLLABORATORS_URLS.OPERATIONS.GET_ONE, CollaboratorsController.getCollaboratorById);

//CREATE NEW COLLABORATOR
router.post(COLLABORATORS_URLS.OPERATIONS.SAVE, CollaboratorsController.createCollaborator);

//UPDATE COLLABORATOR
router.put(COLLABORATORS_URLS.OPERATIONS.UPDATE, CollaboratorsController.updateCollaborator);

//DELETE COLLABORATOR
router.delete(COLLABORATORS_URLS.OPERATIONS.DELETE, CollaboratorsController.deleteCollaborator);

module.exports = router;
