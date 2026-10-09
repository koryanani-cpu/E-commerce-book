import { journalItems } from '../data/siteContent.js';
import SectionHeading from './SectionHeading.jsx';

export default function JournalSection() {
  return (
    <section className="journal-section section-pad" id="journal">
      <div className="container">
        <div className="journal-heading-row">
          <SectionHeading
            eyebrow="พบกันระหว่างหน้าหนังสือ"
            title={<>ข่าวสารและ<br /><em>เรื่องราวระหว่างทาง</em></>}
            description="กิจกรรม บันทึก และความเคลื่อนไหวล่าสุดจากโลกของนักเขียน"
          />
          <span className="journal-side-note">UPDATES · EVENTS · NOTES</span>
        </div>
        <div className="journal-list">
          {journalItems.map((item, index) => (
            <article className="journal-item" key={item.title}>
              <div className={`journal-symbol journal-symbol-${item.type}`} aria-hidden="true">{index === 0 ? '↗' : index === 1 ? '✳' : '✎'}</div>
              <div className="journal-item-content">
                <div className="journal-meta"><span>{item.category}</span><span>{item.date}</span></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <a href="#contact" className="journal-arrow" aria-label={`สอบถามเกี่ยวกับ ${item.title}`}>↗</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
