const express = require('express');
const User = require('../models/User');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.get('/users', authenticateToken, (req, res) => {
  try {
    const currentUser = req.user;

    if (!currentUser) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const userInformation = {
      userId: currentUser.userId,
      email: currentUser.email,
      password: currentUser.password,
    };

    res.json(userInformation);
    console.log('Current user information:', userInformation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/users', authenticateToken, async (req, res) => {
    const currentUser = req.user;
  
    if (!currentUser) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
  
    const { fullName, gender, dateOfBirth, email, phoneNumber } = req.body;
  
    if (!fullName || !gender || !dateOfBirth || !email || !phoneNumber) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        currentUser.userId,
        { $set: { fullName, gender, dateOfBirth, email, phoneNumber } },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

router.delete('/users', authenticateToken, async (req, res) => {
    const currentUser = req.user;
  
    if (!currentUser) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
  
    try {
      const deletedUser = await User.findByIdAndDelete(currentUser.userId);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
router.put('/change-password', authenticateToken, async (req, res) => {
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