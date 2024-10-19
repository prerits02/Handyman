const mongoose = require('mongoose');

const bestsellerSchema = new mongoose.Schema({
    name: {type: String,required: true},
    description: String,
    images: [String], // Array of image URLs
    price: {type: Number,required: true},
    discount: Number, // Optional discount percentage
    available: {type: Boolean,default: true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'User', }}, { timestamps: true });

const Bestseller = mongoose.model('Bestseller', bestsellerSchema);

module.exports = Bestseller;

