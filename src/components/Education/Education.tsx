import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import ChapterHeader from '../ChapterHeader/ChapterHeader';
import './Education.css';

const VP = { once: true, margin: '-60px' };

function LangBar({ pct, delay }: { pct: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <div ref={ref} className="lang-track">
      <motion.div
        className="lang-fill"
        animate={{ width: inView ? `${pct}%` : '0%' }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        style={{ width: '0%' }}
      />
    </div>
  );
}

export default function Education() {
  const { t, lang } = useLanguage();
  const edu = t.education;
  const title = lang === 'fr' ? 'LA FORMATION' : 'THE FOUNDATION';

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <ChapterHeader number="06" title={title} />

        <div className="edu-layout">

          {/* Left column — degree + languages */}
          <div className="edu-left">

            {/* Degree card */}
            <motion.div
              className="edu-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="edu-card-top">
                <span className="edu-period">{edu.period}</span>
                <span className="edu-school-badge">{edu.school}</span>
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <ul className="edu-highlights">
                {edu.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="b-arrow" aria-hidden="true">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div
              className="languages-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="lang-card-label">{edu.langTitle}</span>
              <div className="languages-list">
                {edu.languages.map(lang => (
                  <div key={lang.name} className="lang-item">
                    <div className="lang-row">
                      <span className="lang-name">
                        <span className="lang-code" aria-hidden="true">
                          {lang.flag === '🇫🇷' ? 'FR' : 'EN'}
                        </span>
                        {lang.name}
                      </span>
                      <span className="lang-level">{lang.level}</span>
                    </div>
                    <LangBar pct={lang.pct} delay={0.3} />
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right column — distinctions */}
          <div className="edu-right">
            <motion.span
              className="edu-right-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VP}
              transition={{ duration: 0.5 }}
            >
              {edu.distinctionsTitle}
            </motion.span>

            <div className="distinctions-list">
              {edu.distinctions.map((d, i) => (
                <motion.div
                  key={i}
                  className="distinction-card"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="d-num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="d-body">
                    <h4 className="d-title">{d.title}</h4>
                    <p className="d-sub">{d.subtitle}</p>
                    <p className="d-desc">{d.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
