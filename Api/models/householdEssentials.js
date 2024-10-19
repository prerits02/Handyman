const mongoose = require('mongoose');

const householdEssentialsSchema = new mongoose.Schema({
    name: {type: String,required: true},
    description: String,
    images: [String], 
    price: {type: Number,required: true},
    discount: Number, 
    available: {type: Boolean,default: true},
    user: {type: mongoose.Schema.Types.ObjectId,ref: 'User',}}, { timestamps: true });

const HouseholdEssentials = mongoose.model('HouseholdEssentials', householdEssentialsSchema);

module.exports = HouseholdEssentials;

