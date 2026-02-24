import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Skills.css';

export default function Skills() {
  const { t, lang } = useLanguage();
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;

  const domains = lang === 'fr'
    ? ['Front-End', 'Back-End', 'Mobile', 'Cloud']
    : ['Front-End', 'Back-End', 'Mobile', 'Cloud'];

  return (
    <section className="section" id="skills" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header skills-header">
          <span className="section-label animate-in">{t.skills.label}</span>
          <h2 className="section-title animate-in delay-1">
            {t.skills.title}<span>{t.skills.titleHighlight}</span>
          </h2>
          <div className="fs-domains animate-in delay-2">
            {domains.map((d, i) => (
              <span key={d} className="fs-domain-pill">
                {d}
                {i < domains.length - 1 && <span className="fs-sep"> · </span>}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-cats">
          {t.skills.categories.map((cat, i) => (
            <div key={cat.label} className={`skill-group animate-in delay-${i + 1}`}>
              <div className="skill-group-head">
                <span className="skill-group-icon">{cat.icon}</span>
                <h3 className="skill-group-label">{cat.label}</h3>
              </div>
              <div className="skill-group-tags">
                {cat.skills.map((s) => (
                  <span key={s.name} className="skill-pill">{s.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
