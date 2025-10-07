require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// استيراد الروتات
const authRoutes = require('./routes/auth');
const dataRoutes = require('./routes/data');
const pagesRoutes = require('./routes/pages'); // ← السطر الجديد

const app = express();
app.use(cors());
app.use(express.json());

// ربط قاعدة البيانات
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error(err));

// ربط الروتات
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/pages', pagesRoutes); // ← السطر الجديد

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
