import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import ChapterHeader from '../ChapterHeader/ChapterHeader';
import './Projects.css';

const VP = { once: true, margin: '-60px' };

export default function Projects() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const title = lang === 'fr' ? 'LES PROJETS' : 'THE WORK';

  const filtered = activeFilter === null
    ? t.projects.items
    : t.projects.items.filter(p => p.category === activeFilter);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-top">
          <ChapterHeader number="05" title={title} />

          <motion.div
            className="filter-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VP}
            transition={{ duration: 0.5 }}
          >
            <button
              className={`filter-btn${activeFilter === null ? ' active' : ''}`}
              onClick={() => setActiveFilter(null)}
            >
              {t.projects.filterAll}
            </button>
            {t.projects.filters.map(f => (
              <button
                key={f}
                className={`filter-btn${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Editorial index list */}
        <div className="projects-list">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                className={`project-row${project.featured ? ' featured' : ''}`}
                style={{ '--project-accent': project.accent } as React.CSSProperties}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                {/* Left accent line — visible on hover */}
                <span className="row-accent-line" aria-hidden="true" />

                {/* Number */}
                <span className="row-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Main content */}
                <div className="row-body">
                  <div className="row-head">
                    <h3 className="row-title">{project.title}</h3>
                    <div className="row-badges">
                      <span className="row-cat">{project.category}</span>
                      {project.featured && (
                        <span className="row-featured">Featured</span>
                      )}
                    </div>
                  </div>

                  <p className="row-subtitle">{project.subtitle}</p>

                  {project.featured && (
                    <p className="row-problem">{project.problem}</p>
                  )}

                  <div className="row-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <span className="row-arrow" aria-hidden="true">→</span>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
