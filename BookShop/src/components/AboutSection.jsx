import SectionHeading from './SectionHeading.jsx';

export default function AboutSection() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="about-grid container">
        <div className="about-image-column">
          <div className="about-photo-frame">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=85"
              alt="ภาพนักเขียนในบรรยากาศสบาย ๆ"
              loading="lazy"
            />
          </div>
          <div className="about-image-caption"><span>01 / THE PERSON BEHIND THE PAGES</span><span>เขียนด้วยความรู้สึก</span></div>
          <span className="about-scribble" aria-hidden="true">with love, always</span>
        </div>
        <div className="about-copy">
          <SectionHeading
            eyebrow="ยินดีที่ได้รู้จัก"
            title={<>ฉันเชื่อว่า<br /><em>ทุกคนมีเรื่องเล่า</em></>}
          />
          <p>
            ฉันเป็นนักเขียนที่ชอบสังเกตช่วงเวลาเล็ก ๆ ในชีวิต บทสนทนาที่ค้างคา
            กลิ่นฝนแรกของฤดู หรือความทรงจำที่เราคิดว่าลืมไปแล้ว
          </p>
          <p>
            สิ่งเหล่านี้ค่อย ๆ กลายเป็นตัวละครและเรื่องราวบนหน้ากระดาษ
            ฉันหวังว่าหนังสือของฉันจะเป็นเหมือนเพื่อนคนหนึ่งที่นั่งอยู่ข้าง ๆ
            ในวันที่คุณอยากหยุดพักและรับฟังหัวใจตัวเอง
          </p>
          <div className="signature">Mira <span>Hart</span></div>
          <a href="#journal" className="button button-outline">อ่านบันทึกของฉัน <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
