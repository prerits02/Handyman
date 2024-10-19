
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    designation: { type: String },
    address: { type: String },
    isDeleted: { type: Boolean, default: false }, // Soft delete flag
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
