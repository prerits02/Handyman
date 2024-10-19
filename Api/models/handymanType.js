const mongoose = require('mongoose');

const handymanTypeSchema = new mongoose.Schema({
    typeName: {type: String,required: true},
    commission: {type: Number,required: true},
    type: {type: String,enum: ['Fixed', 'Variable'], required: true},
    status: {type: String,enum: ['Active', 'Inactive'],required: true},}, { timestamps: true });

const HandymanType = mongoose.model('HandymanType', handymanTypeSchema);

module.exports = HandymanType;
