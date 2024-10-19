const mongoose = require('mongoose');

const snacksDrinksSchema = new mongoose.Schema({
    name: {type: String,required: true},
    description: String,
    images: [String], 
    price: {type: Number,required: true},
    discount: Number, 
    available: {type: Boolean,default: true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'User',}}, { timestamps: true });

const SnacksDrinks = mongoose.model('SnacksDrinks', snacksDrinksSchema);

module.exports = SnacksDrinks;
