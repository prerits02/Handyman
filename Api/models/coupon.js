// models/Coupon.js
const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true }, // Coupon code
    type: { type: String, required: true }, // Type of coupon (e.g., Fixed, Percentage)
    discount: { type: Number, required: true }, // Discount amount
    expirationDate: { type: Date, required: true }, // Expiry date of the coupon
    status: { type: String, default: "Active" }, // Status (Active, Expired, etc.)
    description: { type: String, required: true }, // Description of the coupon
});

module.exports = mongoose.model('Coupon', CouponSchema);
