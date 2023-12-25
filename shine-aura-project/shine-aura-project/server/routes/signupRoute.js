const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    // Kiểm tra xem mật khẩu và xác nhận mật khẩu có khớp nhau không
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Mật khẩu không khớp' });
    }

    // Kiểm tra xác nhận mật khẩu và email đã đăng ký
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin' });
    }

    // Kiểm tra xem email đã được đăng ký chưa
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email đã được đăng ký' });
    }

    // Tạo một người dùng mới
    const newUser = new User({ email, password });
    await newUser.save();

    // Tạo và ký JWT
    const token = jwt.sign({ userId: newUser._id }, 'shinaura', { expiresIn: '1h' });

    // Trả về token
    res.status(201).json({ message: 'Người dùng đăng ký thành công', token });
  } catch (error) {
    // Xử lý lỗi kiểm tra hợp lệ
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ message: 'Lỗi kiểm tra hợp lệ', errors });
    }

    // Xử lý các lỗi khác
    console.error(error);
    res.status(500).json({ message: 'Lỗi máy chủ nội bộ' });
  }
});

module.exports = router;
