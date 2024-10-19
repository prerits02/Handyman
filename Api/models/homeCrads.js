// models/Dashboard.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Dashboard Schema
const homeCradsSchema = new Schema({
  totalBookings: { type: Number, required: true, default: 0 },
  totalProviders: { type: Number, required: true, default: 0 },
  totalCustomers: { type: Number, required: true, default: 0 },
  totalEarnings: { type: Number, required: true, default: 0.0 },
});

module.exports = mongoose.model('homeCrads', homeCradsSchema);
