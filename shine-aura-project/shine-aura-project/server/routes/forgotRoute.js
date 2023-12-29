const express = require('express');
const router = express.Router();
const User = require('../models/User');


// Endpoint để kiểm tra email người dùng và gửi token
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Tạo token gồm bốn chữ số và lưu vào cơ sở dữ liệu
    const fourDigitToken = user.generateFourDigitToken();
    await user.save();

    // Gửi token đến email của người dùng (nếu cần)

    res.json({ message: 'Four-digit token created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
