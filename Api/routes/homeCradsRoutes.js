// routes/dashboardRoutes.js

const express = require('express');
const dashboardController = require('../controllers/controllerhomeCrads');

const router = express.Router();

// Get Dashboard Statistics
router.get('/dashboard/stats', dashboardController.getDashboardStats);

// Create or Update Dashboard Statistics
router.post('/dashboard/stats', dashboardController.updateDashboardStats);

module.exports = router;
