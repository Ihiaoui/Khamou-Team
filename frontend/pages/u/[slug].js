import { useState } from 'react';

export default function LandingPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة إرسال البيانات للـ backend
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h2>شكرًا لك على تعبئة النموذج!</h2>
        <p>تم استلام معلوماتك بنجاح.</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>صفحة الهبوط الخاصة بك</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label>
          الاسم:
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          الرسالة:
          <textarea value={message} onChange={e => setMessage(e.target.value)} required />
        </label>
        <button type="submit" style={{ marginTop: '1rem' }}>إرسال</button>
      </form>
    </div>
  )
}
