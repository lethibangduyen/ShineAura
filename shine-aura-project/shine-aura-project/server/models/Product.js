const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    productUrl: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    productId: {
      type: String,
      required: false,
      index: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productType: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: [
      {
        type: String,
        required: false,
        maxlength: 2000,
      },
    ],
    variants: [
      {
      },
    ],
    brands: {
      type: String,
      required: true,
      trim: true,
    },
    tabData: {
      type: Object,
    },
  });
  
  module.exports = mongoose.model('Product', productSchema);
  
