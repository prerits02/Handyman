const mongoose = require('mongoose');

const handymanPandingSchema = new mongoose.Schema({
    name: {type: String,required: true},
    img: {type: String, required: true},
    phone: {type: String,required: true},
    email: {type: String,required: true},
    status: {type: String,enum: ['Pending', 'Approved', 'Rejected'],default: 'Pending'}}, { timestamps: true });

const HandymanPanding = mongoose.model('Handymanpanding', handymanPandingSchema);

module.exports = HandymanPanding;
