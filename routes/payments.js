const express = require('express');
const router = express.Router();

// TODO: Import controllers
// const { processPayment, verifyPayment, getPaymentHistory } = require('../controllers/paymentController');

// @route   POST /api/payments/process
// @desc    Process payment with Stripe
// @access  Private
router.post('/process', (req, res) => {
  res.json({ message: 'Process payment' });
});

// @route   POST /api/payments/verify
// @desc    Verify payment status
// @access  Private
router.post('/verify', (req, res) => {
  res.json({ message: 'Verify payment' });
});

// @route   GET /api/payments/history
// @desc    Get payment history
// @access  Private
router.get('/history', (req, res) => {
  res.json({ message: 'Get payment history' });
});

module.exports = router;
