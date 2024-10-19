// models/Service.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  serviceName: { type: String,required: true},
  category: {type: String,required: true},
  subCategory: {type: String,required: true},
  provider: {type: String,required: true},
  serviceAddress: {type: String,required: true},
  type: {type: String,enum: ['Fixed', 'Variable'],required: true},
  status: {type: String,enum: ['Active', 'Inactive'],required: true},
  price: {type: Number,required: true},
  discount: {type: Number,default: 0},
  duration: {hours: {type: Number,required: true},
    minutes: {type: Number,required: true}
  },
  description: {type: String,required: true},
  isFeatured: {type: Boolean,default: false},
  imageUri: {type: String},
}, {timestamps: true});

module.exports = mongoose.model('Service', ServiceSchema);
