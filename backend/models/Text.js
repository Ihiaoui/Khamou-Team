const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
  content: { type: String, required: true },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Text', TextSchema);
