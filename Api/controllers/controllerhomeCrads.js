// controllers/dashboardController.js

const Dashboard = require('../models/homeCrads');

// Get Dashboard Statistics
exports.getDashboardStats = async (req, res) => {
  try {
    const stats = await Dashboard.findOne({});
    res.status(200).json(stats || { totalBookings: 0, totalProviders: 0, totalCustomers: 0, totalEarnings: 0 });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard statistics', error });
  }
};

// Create or Update Dashboard Statistics
exports.updateDashboardStats = async (req, res) => {
  try {
    const { totalBookings, totalProviders, totalCustomers, totalEarnings } = req.body;
    let stats = await Dashboard.findOne({});
    
    if (!stats) {
      stats = new Dashboard({ totalBookings, totalProviders, totalCustomers, totalEarnings });
    } else {
      stats.totalBookings = totalBookings;
      stats.totalProviders = totalProviders;
      stats.totalCustomers = totalCustomers;
      stats.totalEarnings = totalEarnings;
    }
    
    await stats.save();
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Error updating dashboard statistics', error });
  }
};
