import { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const roles = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Reset typewriter when language changes
  useEffect(() => {
    setRoleIndex(0);
    setDisplayed('');
    setCharIndex(0);
    setTyping(true);
  }, [t]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev + current[charIndex]);
          setCharIndex((i) => i + 1);
        }, 58);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
          setCharIndex((i) => i - 1);
        }, 32);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, roleIndex, roles]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge animate-in visible">
          <span className="badge-dot" />
          <span>{t.hero.available}</span>
        </div>

        <h1 className="hero-name animate-in visible delay-1">
          Melvice Junior
          <br />
          <span className="gradient-text">Guimfack</span>
        </h1>

        <div className="hero-role animate-in visible delay-2">
          <span className="role-prefix">// </span>
          <span className="role-text">{displayed}</span>
          <span className="cursor">|</span>
        </div>

        <p
          className="hero-desc animate-in visible delay-3"
          dangerouslySetInnerHTML={{ __html: t.hero.desc }}
        />

        <div className="hero-actions animate-in visible delay-4">
          <a href="#projects" className="btn btn-primary">
            {t.hero.viewProjects}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t.hero.contactMe}
          </a>
        </div>

        <div className="hero-stats animate-in visible delay-4">
          <div className="stat">
            <span className="stat-number gradient-text">{t.hero.yearsNum}</span>
            <span className="stat-label">{t.hero.yearsLabel}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number gradient-text">{t.hero.projectsNum}</span>
            <span className="stat-label">{t.hero.projectsLabel}</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number gradient-text">{t.hero.techNum}</span>
            <span className="stat-label">{t.hero.techLabel}</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
