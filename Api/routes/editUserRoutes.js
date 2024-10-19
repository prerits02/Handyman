const express = require('express');
const router = express.Router();
const userController = require('../controllers/controllereditUser');

// Get user by ID
router.get('/:id', userController.getUserById);

// Update user
router.put('/:id', userController.updateUser);

// Soft delete user
router.put('/soft-delete/:id', userController.softDeleteUser);

// Restore soft deleted user
router.put('/restore/:id', userController.restoreUser);

// Force delete user (Permanently delete)
router.delete('/force-delete/:id', userController.forceDeleteUser);

module.exports = router;

