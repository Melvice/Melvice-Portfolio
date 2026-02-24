import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

const aboutFr = {
  label: 'Profil',
  title: 'À propos de ',
  titleHighlight: 'moi',
  p1: "Je suis un ingénieur logiciel passionné par la création de produits web et mobiles modernes, performants et centrés sur l'utilisateur. Avec 2 ans d'expérience professionnelle, j'ai travaillé sur des applications Android connectées à AWS, des plateformes SaaS et des SPAs Angular.",
  p2: "J'évolue en environnement Agile et j'aime collaborer avec des équipes pluridisciplinaires pour concevoir des solutions techniques qui répondent réellement aux besoins métier.",
  values: [
    { icon: '🚀', label: 'Performance', desc: 'Code optimisé et applications rapides' },
    { icon: '🎨', label: 'UX / Design', desc: 'Interfaces intuitives et soignées' },
    { icon: '🤝', label: 'Collaboration', desc: 'Communication et travail en équipe' },
    { icon: '📚', label: 'Apprentissage', desc: 'Veille technologique continue' },
  ],
};

const aboutEn = {
  label: 'Profile',
  title: 'About ',
  titleHighlight: 'me',
  p1: "I'm a software engineer passionate about building modern, performant, user-centered web and mobile products. With 2 years of professional experience, I've worked on AWS-connected Android apps, SaaS platforms and Angular SPAs.",
  p2: "I thrive in Agile environments and love collaborating with cross-functional teams to design technical solutions that genuinely address business needs.",
  values: [
    { icon: '🚀', label: 'Performance', desc: 'Optimized code and fast applications' },
    { icon: '🎨', label: 'UX / Design', desc: 'Intuitive and polished interfaces' },
    { icon: '🤝', label: 'Collaboration', desc: 'Communication and teamwork' },
    { icon: '📚', label: 'Learning', desc: 'Continuous tech watch' },
  ],
};

export default function About() {
  const { lang } = useLanguage();
  const about = lang === 'fr' ? aboutFr : aboutEn;
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;

  return (
    <section className="section about-section" id="about" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="section-header">
          <span className="section-label animate-in">{about.label}</span>
          <h2 className="section-title animate-in delay-1">
            {about.title}<span>{about.titleHighlight}</span>
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-text animate-in delay-1">
            <p>{about.p1}</p>
            <p>{about.p2}</p>
          </div>

          <div className="about-values">
            {about.values.map((v, i) => (
              <div key={v.label} className={`value-card animate-in delay-${i + 1}`}>
                <span className="value-icon">{v.icon}</span>
                <div>
                  <h4 className="value-label">{v.label}</h4>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
