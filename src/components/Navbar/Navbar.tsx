import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LogoMark from '../LogoMark/LogoMark';
import './Navbar.css';

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function Navbar() {
  const { t, toggleLang } = useLanguage();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('');

  const navLinks = [
    { label: t.nav.about,      href: '#about' },
    { label: t.nav.skills,     href: '#skills' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects,   href: '#projects' },
    { label: t.nav.education,  href: '#education' },
    { label: t.nav.contact,    href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      for (const id of [...SECTION_IDS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">

        <a href="#" className="nav-logo" onClick={() => setMenuOpen(false)} aria-label="Home">
          <LogoMark size={30} />
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link${active === link.href ? ' active' : ''}`}
                onClick={() => setActive(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="lang-btn" onClick={toggleLang}>
            {t.nav.langSwitch}
          </button>
          <a href="#contact" className="nav-cta">
            {t.nav.hireMe}
          </a>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`mobile-link${active === link.href ? ' active' : ''}`}
                onClick={() => { setMenuOpen(false); setActive(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
              {t.nav.hireMe}
            </a>
          </li>
        </ul>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
