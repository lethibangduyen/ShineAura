const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import model User

router.post('/forgot-password', async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email, resetTokenExpiryDate: { $gt: new Date() } });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired reset token' });
      }
  
      // Thực hiện logic tạo reset token và gửi email ở đây (nếu cần)
      user.generateResetToken();
  
      // Lưu thông tin mới vào cơ sở dữ liệu
      await user.save();
  
      res.json({ message: 'Reset email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
