const mongoose = require('mongoose');

const groceryKitchenSchema = new mongoose.Schema({
    name: {type: String,required: true},
    description: String,
    images: [String], // Array of image URLs
    price: {type: Number,required: true},
    discount: Number, // Optional discount
    available: {type: Boolean,default: true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'User',}}, { timestamps: true });

const GroceryKitchen = mongoose.model('GroceryKitchen', groceryKitchenSchema);

module.exports = GroceryKitchen;
