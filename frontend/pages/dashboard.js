import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // هنا يمكنك جلب البيانات من backend باستخدام fetch
    // مثال:
    // fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/data`)
    //   .then(res => res.json())
    //   .then(data => setSubmissions(data))
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>لوحة التحكم</h1>
      {submissions.length === 0 ? (
        <p>لا توجد بيانات بعد.</p>
      ) : (
        <ul>
          {submissions.map((item, index) => (
            <li key={index}>{item.name}: {item.message}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
