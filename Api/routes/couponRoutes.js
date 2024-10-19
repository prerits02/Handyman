// routes/couponRoutes.js
const express = require('express');
const router = express.Router();
const {
    getCoupons,
    createCoupon,
    updateCoupon,
    deleteCoupon
} = require('../controllers/controllerCoupon');

// Define coupon routes
router.get('/', getCoupons); // Get all coupons
router.post('/', createCoupon); // Create a new coupon

module.exports = router;
