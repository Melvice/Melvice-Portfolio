import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import './Hero.css';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};

const up = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const fade = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

export default function Hero() {
  const { t, lang } = useLanguage();
  const roles = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed,  setDisplayed]  = useState('');
  const [typing,     setTyping]     = useState(true);
  const [charIndex,  setCharIndex]  = useState(0);

  useEffect(() => {
    setRoleIndex(0); setDisplayed(''); setCharIndex(0); setTyping(true);
  }, [t]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => { setDisplayed(p => p + current[charIndex]); setCharIndex(i => i + 1); }, 55);
      } else { timeout = setTimeout(() => setTyping(false), 2400); }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => { setDisplayed(p => p.slice(0, -1)); setCharIndex(i => i - 1); }, 26);
      } else { setRoleIndex(i => (i + 1) % roles.length); setTyping(true); }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, roleIndex, roles]);

  const chapterLabel = lang === 'fr' ? 'La Personne' : 'The Person';

  return (
    <section className="hero" id="hero">
      <div className="container hero-container">

        {/* ── Top bar: chapter label + availability ── */}
        <motion.div
          className="hero-topbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="hero-chapter-tag">
            <span className="chapter-num-sm">01</span>
            <span className="chapter-rule-sm" />
            <span className="chapter-label-sm">{chapterLabel.toUpperCase()}</span>
          </div>
          <div className="hero-available">
            <span className="avail-dot" />
            <span className="avail-text">{t.hero.available}</span>
          </div>
        </motion.div>

        {/* ── Name — the centerpiece ── */}
        <motion.div
          className="hero-name-block"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-name" variants={up}>
            <span className="name-light">Melvice Junior</span>
            <span className="name-bold-italic">Guimfack<span className="name-dot">.</span></span>
          </motion.div>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          className="hero-divider"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        />

        {/* ── Bottom bar: role + stats + CTAs ── */}
        <motion.div
          className="hero-bottom"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Role typewriter */}
          <motion.div className="hero-role" variants={fade}>
            <span className="role-slash">// </span>
            <span>{displayed}</span>
            <span className="role-cursor">|</span>
          </motion.div>

          {/* Stats */}
          <motion.div className="hero-stats" variants={fade}>
            <div className="hero-stat">
              <span className="stat-n">{t.hero.yearsNum}</span>
              <span className="stat-l">{t.hero.yearsLabel}</span>
            </div>
            <span className="stat-sep" />
            <div className="hero-stat">
              <span className="stat-n">{t.hero.projectsNum}</span>
              <span className="stat-l">{t.hero.projectsLabel}</span>
            </div>
            <span className="stat-sep" />
            <div className="hero-stat">
              <span className="stat-n">{t.hero.techNum}</span>
              <span className="stat-l">{t.hero.techLabel}</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div className="hero-actions" variants={fade}>
            <a href="#projects" className="btn-primary-ed">
              {t.hero.viewProjects}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost-ed">{t.hero.contactMe}</a>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="scroll-line" />
        <span className="scroll-label">Scroll</span>
      </motion.div>
    </section>
  );
}
