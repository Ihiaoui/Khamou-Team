const express = require('express');
const router = express.Router();
const { createPage, getPageBySlug, submitToPage, getSubmissionsForOwner } = require('../controllers/pageController');
const auth = require('../middlewares/auth'); // middleware للتحقق من المستخدم (JWT)

// صاحب الحساب ينشئ صفحة هبوط جديدة
router.post('/', auth, createPage);

// الصفحة العامة (الزوار يملأون البيانات)
router.get('/slug/:slug', getPageBySlug);

// إرسال بيانات من الزوار
router.post('/slug/:slug/submit', submitToPage);

// جلب كل Submissions لمالك الصفحات
router.get('/owner/:ownerId/submissions', auth, getSubmissionsForOwner);

module.exports = router;
