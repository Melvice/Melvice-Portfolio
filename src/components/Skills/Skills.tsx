import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import ChapterHeader from '../ChapterHeader/ChapterHeader';
import './Skills.css';

const ROW_1 = ['React', 'TypeScript', 'Angular', 'NestJS', 'Node.js', 'REST / GraphQL', 'RxJS', 'SCSS / HTML5', 'PostgreSQL', 'MongoDB'];
const ROW_2 = ['Android SDK', 'Java', 'React Native', 'Firebase', 'AWS', 'Docker', 'CI/CD', 'Git'];

const CategoryIcons: Record<string, JSX.Element> = {
  'Front-End': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'Back-End': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="4" rx="1" />
      <rect x="2" y="10" width="20" height="4" rx="1" />
      <rect x="2" y="17" width="20" height="4" rx="1" />
      <circle cx="6" cy="5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="6" cy="12" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="6" cy="19" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  'Mobile': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
    </svg>
  ),
  'Cloud & DevOps': (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </svg>
  ),
};

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask">
      <div className={`marquee-track${reverse ? ' marquee-rev' : ''}`}>
        {doubled.map((s, i) => (
          <span key={i} className="marquee-item">
            {s}<span className="marquee-dot" aria-hidden="true"> ·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const VP = { once: true, margin: '-60px' };

export default function Skills() {
  const { t, lang } = useLanguage();
  const title = lang === 'fr' ? "L'EXPERTISE" : 'THE CRAFT';

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <ChapterHeader number="03" title={title} />
      </div>

      {/* Marquee — full bleed outside container */}
      <div className="marquee-wrap">
        <MarqueeRow items={ROW_1} />
        <MarqueeRow items={ROW_2} reverse />
      </div>

      <div className="container">
        <div className="skills-grid">
          {t.skills.categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="skill-group-head">
                <span className="skill-icon" aria-hidden="true">
                  {CategoryIcons[cat.label] ?? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )}
                </span>
                <h3 className="skill-group-label">{cat.label}</h3>
              </div>
              <div className="skill-pills">
                {cat.skills.map(s => (
                  <motion.span key={s.name} className="skill-pill" whileHover={{ y: -2 }}>
                    {s.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
