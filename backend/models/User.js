const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  landingPages: [{ type: String }] // روابط الصفحات الخاصة بالمستخدم
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
