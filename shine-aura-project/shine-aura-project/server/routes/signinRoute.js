const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user based on the provided email
    const user = await User.findOne({ email });

    // If user is not found, return a user not found error
    if (!user) {
      return res.status(404).json({ message: 'Email not found' });
    }

    // If the password does not match, return an incorrect password error
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Generate a token with the user's ID
    const token = jwt.sign({ userId: user._id }, 'shineaura', { expiresIn: '1h' });

    // Send the token in the response
    res.json({ token });
  } catch (error) {
    console.error(error);

    // Handle different types of errors
    if (error.name === 'ValidationError') {
      // MongoDB validation error
      return res.status(400).json({ message: 'Validation error', details: error.message });
    } else {
      // Server error
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
});

module.exports = router;
