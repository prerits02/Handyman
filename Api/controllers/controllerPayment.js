
const Payment = require('../models/payment');

exports.processPayment = async (req, res) => {
  const { userId, amount, paymentMethod } = req.body;

  const payment = new Payment({
    userId,
    amount,
    paymentMethod,
    status: 'pending' // Initial status is 'pending'
  });

  try {
    const newPayment = await payment.save();
    res.status(201).json({ message: 'Payment processed successfully', payment: newPayment });
  } catch (err) {
    res.status(400).json({ message: 'Payment processing failed', error: err.message });
  }
};
