const mongoose = require('mongoose');

const handymanSchema = new mongoose.Schema({
    firstName: {type: String,required: true},
    lastName: {type: String,required: true},
    userName: {type: String,required: true,unique: true},
    email: {type: String,required: true,unique: true},
    contactNumber: {type: String,required: true},
    designation: {type: String,required: true},
    address: {type: String,required: true},
    userType: {type: String,required: true},
    provider: {type: String,required: true},}, { timestamps: true });

const Handyman = mongoose.model('Handyman', handymanSchema);

module.exports = Handyman;
