const express = require('express');
const router = express.Router();
const providerController = require('../controllers/controllerProvider');

// Routes for providers
router.post('/', providerController.createProvider);
router.get('/', providerController.getAllProviders);
router.get('/:id', providerController.getProviderById);
router.put('/:id', providerController.updateProvider);


module.exports = router;
