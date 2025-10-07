const LandingPage = require('../models/LandingPage');
const Submission = require('../models/Submission');
const { nanoid } = require('nanoid'); // لتوليد slug فريد

// إنشاء صفحة جديدة
exports.createPage = async (req, res) => {
  try {
    const owner = req.userId; // من middleware auth
    const { title, template, content, slug } = req.body;
    const finalSlug = slug || `p-${nanoid(6)}`;
    const page = new LandingPage({ owner, title, template, content, slug: finalSlug });
    await page.save();
    res.status(201).json(page);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

// جلب صفحة هبوط عامة حسب slug
exports.getPageBySlug = async (req, res) => {
  try {
    const page = await LandingPage.findOne({ slug: req.params.slug, isActive: true });
    if (!page) return res.status(404).json({ error: 'Page not found' });
    res.json(page);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

// استقبال بيانات الزوار
exports.submitToPage = async (req, res) => {
  try {
    const page = await LandingPage.findOne({ slug: req.params.slug, isActive: true });
    if (!page) return res.status(404).json({ error: 'Page not found' });

    const { name, email, phone, message, referrer } = req.body;
    const submission = new Submission({
      landingPage: page._id,
      name, email, phone, message, referrer
    });
    await submission.save();
    res.status(201).json({ message: 'Submission received' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

// جلب كل Submissions لمالك الصفحات
exports.getSubmissionsForOwner = async (req, res) => {
  try {
    const ownerId = req.userId;
    const pages = await LandingPage.find({ owner: ownerId }).select('_id slug title');
    const pageIds = pages.map(p => p._id);
    const submissions = await Submission.find({ landingPage: { $in: pageIds } }).sort({ createdAt: -1 });
    res.json({ pages, submissions });
  } catch (err) { res.status(500).json({ error: err.message }); }
};
