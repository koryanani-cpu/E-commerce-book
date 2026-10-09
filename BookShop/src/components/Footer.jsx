export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-name">MIRA HART</span>
          <span className="wordmark-caption">AUTHOR · STORYTELLER</span>
        </a>
        <p>ขอบคุณที่แวะมาอ่านเรื่องราว<br />หวังว่าจะได้พบกันอีกในหน้าถัดไป</p>
        <a href="#home" className="back-to-top">กลับขึ้นด้านบน ↑</a>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Mira Hart. All stories reserved.</span>
        <span>ออกแบบด้วยความรักในตัวอักษร <b>✳</b></span>
      </div>
    </footer>
  );
}
