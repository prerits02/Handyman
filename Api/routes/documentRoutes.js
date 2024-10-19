
const express = require('express');
const router = express.Router();
const documentController = require('../controllers/controllerDocument');

router.get('/list', documentController.getDocuments);
router.post('/add', documentController.addDocument);

module.exports = router;
