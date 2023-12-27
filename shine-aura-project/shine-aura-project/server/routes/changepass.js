const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authenticateToken = require('../middleware/auth');

// Route for changing the password
router.put('/users', authenticateToken, async (req, res) => {
  const { email, currentPassword, newPassword, retypeNewPassword } = req.body;
  const userId = req.user.userId;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (currentPassword !== user.password) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }
    if (newPassword !== retypeNewPassword) {
      return res.status(400).json({ message: 'New password and retype password do not match' });
    }
    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
