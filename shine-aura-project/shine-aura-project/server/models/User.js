const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String },
  gender: { type: String },
  dateOfBirth: { type: Date },
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
