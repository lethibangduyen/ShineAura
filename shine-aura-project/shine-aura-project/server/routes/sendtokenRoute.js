// routes/verification.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import your User model

router.post('/verification', async (req, res) => {
  try {
    const { verificationCode, userEmail } = req.body;

    // Find the user in the database based on the provided email
    const user = await User.findOne({ email: userEmail });

    if (user && user.resetToken === verificationCode) {
      // If the verification is successful, you can perform additional actions here
      res.json({ message: 'Verification successful' });
    } else {
      res.status(400).json({ error: 'Invalid verification code or email' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
