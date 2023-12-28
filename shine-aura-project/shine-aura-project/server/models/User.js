const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number },
  fullName: { type: String },
  gender: { type: String },
  dateOfBirth: { type: Date },
});

userSchema.methods.generateResetToken = async function () {
  const resetToken = crypto.randomBytes(16).toString('hex');
  const resetTokenExpiryDate = new Date(new Date().getTime() + 30 * 60 * 1000); // 30 phút hết hạn

  this.resetToken = resetToken;
  this.resetTokenExpiryDate = resetTokenExpiryDate;

  await this.save(); // Đảm bảo dữ liệu được lưu trữ trước khi kết thúc hàm

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
