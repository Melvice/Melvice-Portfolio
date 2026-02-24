import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Projects.css';

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;

  // null = "all"
  const filtered = activeFilter === null
    ? t.projects.items
    : t.projects.items.filter((p) => p.category === activeFilter);

  const handleFilter = (value: string | null) => {
    setActiveFilter(value);
  };

  return (
    <section className="section" id="projects" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header">
          <span className="section-label animate-in">{t.projects.label}</span>
          <h2 className="section-title animate-in delay-1">
            {t.projects.title}<span>{t.projects.titleHighlight}</span>
          </h2>
        </div>

        <div className="project-filters animate-in delay-2">
          <button
            className={`filter-btn ${activeFilter === null ? 'active' : ''}`}
            onClick={() => handleFilter(null)}
          >
            {t.projects.filterAll}
          </button>
          {t.projects.filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => handleFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* key on grid forces re-mount on filter change, triggering CSS animations */}
        <div className="projects-grid" key={`${activeFilter ?? 'all'}-${t.projects.label}`}>
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{
                '--project-accent': project.accent,
                animationDelay: `${i * 0.07}s`,
              } as React.CSSProperties}
            >
              <div className="project-card-inner">
                <div className="project-top">
                  <div className="project-icon-wrap">
                    <span className="project-icon">{project.icon}</span>
                  </div>
                  {project.featured && (
                    <span className="featured-badge">{t.projects.featuredLabel}</span>
                  )}
                </div>

                <div className="project-category-badge">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <div className="project-problem">
                  <span className="problem-label">{t.projects.problemLabel}</span>
                  <p>{project.problem}</p>
                </div>

                <div className="project-learned">
                  <span className="learned-label">{t.projects.learnedLabel}</span>
                  <ul>
                    {project.learned.map((item, j) => (
                      <li key={j}>
                        <span className="check-icon">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
