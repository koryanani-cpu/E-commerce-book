import { useState } from 'react';
import SectionHeading from './SectionHeading.jsx';

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-grid container">
        <div className="contact-copy">
          <SectionHeading
            eyebrow="มาคุยกันนะ"
            title={<>ทุกเรื่องเล่า<br /><em>เริ่มจากบทสนทนา</em></>}
            description="สำหรับงานเสวนา สัมภาษณ์ ลิขสิทธิ์หนังสือ หรืออยากส่งข้อความมาทักทาย สามารถเขียนถึงฉันได้ที่นี่"
          />
          <a className="contact-email" href="mailto:hello@mirahart.example">hello@mirahart.example <span aria-hidden="true">↗</span></a>
          <p className="contact-small-note">เปลี่ยนอีเมลตัวอย่างนี้เป็นที่อยู่ติดต่อจริงก่อนเผยแพร่</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-two-col">
            <label>ชื่อของคุณ<input name="name" type="text" placeholder="ชื่อ-นามสกุล" required /></label>
            <label>อีเมล<input name="email" type="email" placeholder="name@example.com" required /></label>
          </div>
          <label>หัวข้อที่ต้องการติดต่อ
            <select name="subject" defaultValue="collaboration">
              <option value="collaboration">งานและความร่วมมือ</option>
              <option value="books">สอบถามเกี่ยวกับหนังสือ</option>
              <option value="event">เชิญร่วมกิจกรรม</option>
              <option value="other">อื่น ๆ</option>
            </select>
          </label>
          <label>ข้อความ<textarea name="message" rows="4" placeholder="เขียนข้อความของคุณที่นี่..." required /></label>
          <div className="contact-form-bottom">
            <p className={sent ? 'form-message form-message-success' : 'form-message'} aria-live="polite">
              {sent ? 'ได้รับข้อความตัวอย่างแล้ว — เชื่อมต่อ backend หรือบริการฟอร์มก่อนใช้งานจริง' : 'ยินดีที่ได้อ่านทุกข้อความจากคุณ'}
            </p>
            <button type="submit" className="button button-dark">ส่งข้อความ <span aria-hidden="true">↗</span></button>
          </div>
        </form>
      </div>
    </section>
  );
}
