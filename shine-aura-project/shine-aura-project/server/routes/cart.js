// Server code
const express = require('express');
const router = express.Router();
const ProductModel = require('../models/Product'); // Thay thế bằng mô hình sản phẩm của bạn
const CartModel = require('../models/cart'); // Mô hình giỏ hàng mới
const authMiddleware = require('../middleware/auth'); // Middleware xác thực người dùng

router.post('/cart', authMiddleware, async (req, res) => {
  const { userId } = req.user;
  const { productId } = req.body;

  try {
    // Kiểm tra sự tồn tại của sản phẩm
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng của người dùng chưa
    const existingCartItem = await CartModel.findOne({ userId, productId });

    if (existingCartItem) {
      // Nếu sản phẩm đã tồn tại, cập nhật số lượng
      existingCartItem.quantity += 1; // hoặc quantity tăng theo nhu cầu
      await existingCartItem.save();
    } else {
      // Nếu sản phẩm chưa tồn tại, tạo mới một mục trong giỏ hàng
      await CartModel.create({ userId, productId });
    }

    res.json({ success: true, message: 'Product added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
