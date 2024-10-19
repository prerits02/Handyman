// models/Booking.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Booking Schema
const detailsSchema = new Schema({
  bookingId: { type: String, required: true },
  serviceName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  provider: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
  },
  handyman: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
  },
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
  },
  extraCharges: [{
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  }],
  priceDetails: {
    price: { type: Number, required: true },
    coupon: { type: String },
    discount: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true },
  },
  payment: {
    paymentId: { type: String, required: true },
    method: { type: String, required: true },
    status: { type: String, enum: ['Paid', 'Pending'], default: 'Pending' },
  },
  statusHistory: [{
    status: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    details: { type: String },
  }]
});

module.exports = mongoose.model('details', detailsSchema);
