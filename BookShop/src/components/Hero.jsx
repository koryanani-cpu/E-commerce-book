export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> พื้นที่เล็ก ๆ สำหรับเรื่องเล่าของเรา</p>
          <h1>บางเรื่องราว<br />พาเรากลับมา<br /><em>พบตัวเองอีกครั้ง</em></h1>
          <p className="hero-description">
            ฉันชื่อ Mira Hart นักเขียนที่เชื่อว่าเรื่องเล่าธรรมดา ๆ
            อาจทำให้เรามองโลกและหัวใจของตัวเองต่างไปจากเดิม
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#books">ค้นพบหนังสือ <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#about">รู้จักนักเขียน <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-note">
            <span className="note-mark">“</span>
            <span>Stories are how we remember<br />what it means to be human.</span>
          </div>
        </div>

        <div className="hero-art" aria-label="ภาพบรรยากาศการทำงานของนักเขียน">
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85"
              alt="โต๊ะทำงานและสมุดบันทึกของนักเขียน"
            />
          </div>
          <div className="hero-sticker"><span>WORDS</span><strong>with<br />heart</strong><i>✳</i></div>
          <div className="hero-caption"><span className="caption-dot" /> บันทึกจากโต๊ะเขียนหนังสือ <span>NO. 01</span></div>
          <div className="hero-side-text">A LIFE TOLD IN STORIES</div>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>นิยาย · เรื่องสั้น · บันทึก</span>
        <span className="scroll-cue"><span /> เลื่อนเพื่อสำรวจ</span>
        <span>ยินดีต้อนรับสู่โลกของฉัน</span>
      </div>
    </section>
  );
}
