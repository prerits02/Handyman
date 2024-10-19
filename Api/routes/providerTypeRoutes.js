const express = require('express');
const router = express.Router();
const providerTypeController = require('../controllers/controllerProviderType');

// Routes for provider types
router.post('/', providerTypeController.createProviderType);
router.get('/', providerTypeController.getAllProviderTypes);
router.put('/:id', providerTypeController.updateProviderType);
router.get('/pending', providerTypeController.getPendingProviders);

module.exports = router;
