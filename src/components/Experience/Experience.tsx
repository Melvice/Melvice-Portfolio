import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import ChapterHeader from '../ChapterHeader/ChapterHeader';
import './Experience.css';

const VP = { once: true, margin: '-60px' };

export default function Experience() {
  const { t, lang } = useLanguage();
  const title = lang === 'fr' ? 'LE PARCOURS' : 'THE JOURNEY';

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <ChapterHeader number="04" title={title} italic />

        <div className="exp-list">
          {t.experience.jobs.map((job, i) => (
            <motion.div
              key={`${job.company}-${i}`}
              className="exp-item"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Index */}
              <span className="exp-idx" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="exp-body">
                {/* Header */}
                <div className="exp-header">
                  <div className="exp-left-block">
                    <div className="exp-role-row">
                      <h3 className="exp-role">{job.role}</h3>
                      {job.current && (
                        <span className="now-badge">
                          <span className="now-dot" />
                          Now
                        </span>
                      )}
                    </div>
                    <div className="exp-meta">
                      <span className="exp-company">{job.company}</span>
                      <span className="exp-sep">·</span>
                      <span className="exp-location">{job.location}</span>
                    </div>
                  </div>
                  <div className="exp-right-block">
                    <span className="exp-period">{job.period}</span>
                    <span className={`exp-type ${job.typeClass}`}>{job.type}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="b-arrow" aria-hidden="true">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="exp-tech">
                  {job.tech.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
