const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  landingPage: { type: mongoose.Schema.Types.ObjectId, ref: 'LandingPage', required: true },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
  referrer: { type: String }, // يمكن وضع رابط المحيل أو أي معلومة إضافية
  submittedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Submission', SubmissionSchema);
