import { testimonials } from '../data/siteContent.js';
import SectionHeading from './SectionHeading.jsx';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section section-pad">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="เสียงจากผู้อ่าน"
          title={<>ถ้อยคำจากคนที่เดินทาง<br /><em>ไปด้วยกัน</em></>}
          description="เรื่องราวจะสมบูรณ์ขึ้นเมื่อได้ออกเดินทางไปถึงใครสักคน"
        />
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <article className="testimonial-card" key={item.name}>
              <div className="quote-mark" aria-hidden="true">“</div>
              <div className="star-row" aria-label="รีวิว 5 ดาว">★★★★★</div>
              <blockquote>{item.quote}</blockquote>
              <div className="reader-meta">
                <span className={`reader-avatar avatar-${index + 1}`}>{item.name.charAt(0)}</span>
                <span><strong>{item.name}</strong><small>{item.role}</small></span>
              </div>
            </article>
          ))}
        </div>
        <p className="review-note">ตัวอย่างข้อความรีวิว — เปลี่ยนเป็นรีวิวจริงก่อนเผยแพร่เว็บไซต์</p>
      </div>
    </section>
  );
}
