// controllers/couponController.js
const Coupon = require('../models/coupon');

// Get all coupons
exports.getCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.json(coupons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new coupon
exports.createCoupon = async (req, res) => {
    const { code, type, discount, expirationDate, status, description } = req.body;

    const coupon = new Coupon({
        code,
        type,
        discount,
        expirationDate,
        status,
        description,
    });

    try {
        const newCoupon = await coupon.save();
        res.status(201).json(newCoupon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

