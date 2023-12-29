// routes/reset-password.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/resetpassword', async (req, res) => {
  try {
    const {userEmail , newPassword ,confirmPassword} = req.body;

    const user = await User.findOne({ email: userEmail });

    if (user) {
      user.password = newPassword;
      await user.save();

      res.json({ message: 'Password updated successfully' });
    } else {
      res.status(400).json({ error: 'Invalid email or reset token' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
