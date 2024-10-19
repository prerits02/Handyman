const express = require('express');
const router = express.Router();
const packageController = require('../controllers/controllerpackage');

// Create a new package
router.post('/', packageController.createPackage);

// Get all packages
router.get('/', packageController.getAllPackages);

// Get a specific package by ID
router.get('/:id', packageController.getPackageById);

// Update a package by ID
router.put('/:id', packageController.updatePackage);



module.exports = router;
