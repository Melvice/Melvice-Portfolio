import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Education.css';

export default function Education() {
  const { t } = useLanguage();
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;
  const edu = t.education;

  return (
    <section className="section" id="education" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header">
          <span className="section-label animate-in">{edu.label}</span>
          <h2 className="section-title animate-in delay-1">
            {edu.title}<span>{edu.titleHighlight}</span>
          </h2>
        </div>

        <div className="edu-layout">
          <div className="edu-left">
            <div className="edu-card animate-in">
              <div className="edu-icon">🎓</div>
              <div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-school">{edu.school}</p>
                <p className="edu-period">{edu.period}</p>
                <ul className="edu-highlights">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="highlight-dot" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="languages-card animate-in delay-1">
              <h3 className="lang-title">{edu.langTitle}</h3>
              <div className="languages">
                {edu.languages.map((lang) => (
                  <div key={lang.name} className="lang-item">
                    <div className="lang-header">
                      <div className="lang-name">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                      <span className="lang-level">{lang.level}</span>
                    </div>
                    <div className="lang-track">
                      <div
                        className="lang-fill"
                        style={{ '--target': `${lang.pct}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="distinctions-col">
            <span className="section-label animate-in">{edu.distinctionsTitle}</span>
            <div className="distinctions-list">
              {edu.distinctions.map((d, i) => (
                <div key={i} className={`distinction-card animate-in delay-${i + 1}`}>
                  <span className="distinction-icon">{d.icon}</span>
                  <div>
                    <h4 className="distinction-title">{d.title}</h4>
                    <p className="distinction-subtitle">{d.subtitle}</p>
                    <p className="distinction-desc">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
