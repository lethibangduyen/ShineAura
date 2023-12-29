const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Auto-generated unique identifier
    productUrl: {
      type: String,
      required: true,
      unique: true, // Ensure URL uniqueness for data integrity
      trim: true, // Remove extra whitespace
    },
    productId: {
      type: String,
      required: true,
      index: true, // Create an index for efficient querying
    },
    productName: {
      type: String,
      required: true,
      trim: true, // Remove extra whitespace
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
        required: true,
        maxlength: 2000, // Limit string length for image URLs
      },
    ],
    variants: [
      {
        // Define the structure for each variant (e.g., size, color, stock, etc.)
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
  
