import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Navbar.css';

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function Navbar() {
  const { t, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const id of [...SECTION_IDS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">MJG</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? 'active' : ''}
                onClick={() => { setMenuOpen(false); setActive(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-controls">
            <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
              {t.nav.langSwitch}
            </button>
            <a href="#contact" className="nav-cta" onClick={() => { setMenuOpen(false); setActive('#contact'); }}>
              {t.nav.hireMe}
            </a>
          </li>
        </ul>

        <div className="nav-right-mobile">
          <button className="lang-toggle lang-toggle-mobile" onClick={toggleLang} aria-label="Switch language">
            {t.nav.langSwitch}
          </button>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
