// models/Category.js
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true }, // Assuming you will store image URLs
    status: { type: String, required: true },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false }
});

module.exports = mongoose.model('Category', CategorySchema);
