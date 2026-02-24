import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Experience.css';

export default function Experience() {
  const { t } = useLanguage();
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;

  return (
    <section className="section" id="experience" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header">
          <span className="section-label animate-in">{t.experience.label}</span>
          <h2 className="section-title animate-in delay-1">
            {t.experience.title}<span>{t.experience.titleHighlight}</span>
          </h2>
        </div>

        <div className="timeline">
          {t.experience.jobs.map((job, i) => (
            <div key={`${job.company}-${i}`} className={`timeline-item animate-in delay-${i + 1}`}>
              <div className="timeline-line">
                <div className={`timeline-dot ${job.current ? 'current' : ''}`}>
                  {job.current && <span className="dot-ping" />}
                </div>
              </div>

              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <div className="timeline-meta">
                      <span className="timeline-company">{job.company}</span>
                      <span className="timeline-separator">·</span>
                      <span className="timeline-location">{job.location}</span>
                    </div>
                  </div>
                  <div className="timeline-right">
                    <span className="timeline-period">{job.period}</span>
                    <span className={`timeline-type ${job.typeClass}`}>{job.type}</span>
                  </div>
                </div>

                <ul className="timeline-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="bullet-icon">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-tech">
                  {job.tech.map((tech) => (
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
