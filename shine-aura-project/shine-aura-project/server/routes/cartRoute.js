const express = require('express');
const router = express.Router();
const ProductModel = require('../models/Product');
const CartModel = require('../models/cart');
const authMiddleware = require('../middleware/auth');

router.post('/cart', authMiddleware, async (req, res) => {
  console.log(req.body);
  const { userId } = req.user;
  const { productId } = req.body;
  console.log('productId', productId);
  console.log('userId', userId);

  try {
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    let existingCart = await CartModel.findOne({ userId });

    if (existingCart) {
      const itemIndex = existingCart.items.findIndex(item => item.productId.toString() === productId);
      if (itemIndex > -1) {
        existingCart.items[itemIndex].quantity += 1;
      } else {
        existingCart.items.push({ productId, quantity: 1 });
      }
      await existingCart.save();
    } else {
      existingCart = await CartModel.create({ userId, items: [{ productId, quantity: 1 }] });
    }

    res.json({ success: true, message: 'Product added to cart successfully', cart: existingCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.toString() });
  }
});

module.exports = router;


// router.delete('/cart', authMiddleware, async (req, res) => {
//   const { userId } = req.user;
//   const { productId } = req.body;

//   try {
//     const existingCartItem = await CartModel.findOne({ userId, productId });
 
//     if (!existingCartItem) {
//       return res.status(404).json({ success: false, message: 'Product not found' });
//     } else {
//       await existingCartItem.remove();
//       res.json({ success: true, message: 'Product removed from cart successfully' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// router.patch('/cart', authMiddleware, async (req, res) => {
//   const { userId } = req.user;
//   const { productId } = req.body;
//   const { newQuantity } = req.body;
 
//   try {
//    const cart = await CartModel.findOne({ userId });
  
//    if (!cart) {
//      return res.status(404).json({ success: false, message: 'Cart not found' });
//    }
 
//    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
 
//    if (itemIndex === -1) {
//      return res.status(404).json({ success: false, message: 'Product not found in cart' });
//    }
 
//    cart.items[itemIndex].quantity = newQuantity;
//    await cart.save();
 
//    res.json({ success: true, message: 'Product quantity updated successfully' });
//   } catch (error) {
//    console.error(error);
//    res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
//  });
