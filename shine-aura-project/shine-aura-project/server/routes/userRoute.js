const express = require('express');
const User = require('../models/User');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

// Get current user
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

// Update current user information
router.put('/users', authenticateToken, async (req, res) => {
    const currentUser = req.user;
  
    if (!currentUser) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
  
    const { fullName, gender, dateOfBirth, email, phoneNumber } = req.body;
  
    // Validate input data
    if (!fullName || !gender || !dateOfBirth || !email || !phoneNumber) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    try {
      // Use the _id of the current user from req.user to update information
      const updatedUser = await User.findByIdAndUpdate(
        currentUser.userId, // Assuming the user ID is stored in req.user.userId
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

  // Delete current user
router.delete('/users', authenticateToken, async (req, res) => {
    const currentUser = req.user;
  
    if (!currentUser) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
  
    try {
      // Assuming User model has a method to delete by user ID
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
    // Fetch the user from the database using email
    const user = await User.findOne({ email });

    // Check if the user with the given email exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the provided current password matches the one stored in the database
    if (currentPassword !== user.password) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Check if the new password and retype password match
    if (newPassword !== retypeNewPassword) {
      return res.status(400).json({ message: 'New password and retype password do not match' });
    }

    // Update the user's password in the database
    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;