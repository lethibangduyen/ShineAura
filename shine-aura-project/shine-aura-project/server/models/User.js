const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber : { type: Number },
  fullName: { type: String },
  gender: { type: String },
  dateOfBirth: { type: Date },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
