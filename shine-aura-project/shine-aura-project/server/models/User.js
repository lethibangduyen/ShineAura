const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true },
    // Các trường khác bạn muốn lưu trữ
    });

    const User = mongoose.model('User', userSchema);
    module.exports = User;