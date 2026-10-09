import { useState } from 'react';

const navItems = [
  { href: '#home', label: 'หน้าแรก' },
  { href: '#books', label: 'หนังสือ' },
  { href: '#about', label: 'เกี่ยวกับฉัน' },
  { href: '#journal', label: 'ข่าวสาร' },
  { href: '#contact', label: 'ติดต่อ' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <a className="wordmark" href="#home" aria-label="Mira Hart หน้าแรก" onClick={closeMenu}>
          <span className="wordmark-name">MIRA HART</span>
          <span className="wordmark-caption">AUTHOR · STORYTELLER</span>
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="เมนูหลัก">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#books" onClick={closeMenu}>สำรวจหนังสือ <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
