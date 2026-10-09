import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-inner container">
        <div className="newsletter-symbol" aria-hidden="true">✳</div>
        <div className="newsletter-copy">
          <p className="eyebrow">จดหมายจากนักเขียน</p>
          <h2>ส่งเรื่องเล่าดี ๆ<br /><em>ไปถึงกล่องจดหมายของคุณ</em></h2>
          <p>รับข่าวหนังสือเล่มใหม่ บันทึกระหว่างเขียน และกิจกรรมที่กำลังจะมาถึง</p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">อีเมลของคุณ</label>
          <div className="newsletter-input-row">
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }}
              placeholder="อีเมลของคุณ"
              required
            />
            <button type="submit" aria-label="สมัครรับข่าวสาร">↗</button>
          </div>
          <p className={submitted ? 'form-message form-message-success' : 'form-message'} aria-live="polite">
            {submitted ? 'รับข้อมูลแล้ว — เชื่อมต่อระบบส่งอีเมลจริงก่อนเปิดใช้งาน' : 'ไม่มีสแปม ส่งเฉพาะเรื่องที่คิดว่าคุณอยากอ่าน'}
          </p>
        </form>
      </div>
    </section>
  );
}
