const mongoose = require('mongoose');

const LandingPageSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, default: 'صفحة هبوط' },
  slug: { type: String, required: true, unique: true }, // eg: "offer1" or generated uuid
  template: { type: String, default: 'default' }, // اسم القالب
  content: { type: Object, default: {} }, // نصوص، صور، إعدادات قالب
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('LandingPage', LandingPageSchema);
