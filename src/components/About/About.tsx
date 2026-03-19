import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import ChapterHeader from '../ChapterHeader/ChapterHeader';
import './About.css';

const aboutFr = {
  chapterTitle: "L'APPROCHE",
  pullQuote: 'Je construis des expériences qui se ressentent.',
  p1: "Ingénieur logiciel diplômé de Polytechnique Montréal, passionné par la création de produits web et mobiles modernes, performants et centrés sur l'utilisateur. Avec 2 ans d'expérience, j'ai travaillé sur des applications Android connectées à AWS, des plateformes SaaS et des SPAs Angular.",
  p2: "J'évolue en environnement Agile et j'aime collaborer avec des équipes pluridisciplinaires pour concevoir des solutions qui répondent réellement aux besoins métier.",
  values: [
    { label: 'Performance', desc: 'Code optimisé et applications rapides' },
    { label: 'UX / Design', desc: 'Interfaces intuitives et soignées' },
    { label: 'Collaboration', desc: 'Communication et travail en équipe' },
    { label: 'Apprentissage', desc: 'Veille technologique continue' },
  ],
};

const aboutEn = {
  chapterTitle: 'THE APPROACH',
  pullQuote: 'I build experiences that feel intentional.',
  p1: "Software engineer graduate of Polytechnique Montréal, passionate about building modern, performant, user-centered web and mobile products. With 2 years of experience, I've worked on AWS-connected Android apps, SaaS platforms and Angular SPAs.",
  p2: "I thrive in Agile environments and love collaborating with cross-functional teams to design technical solutions that genuinely address business needs.",
  values: [
    { label: 'Performance', desc: 'Optimized code and fast applications' },
    { label: 'UX / Design', desc: 'Intuitive and polished interfaces' },
    { label: 'Collaboration', desc: 'Communication and teamwork' },
    { label: 'Learning', desc: 'Continuous tech watch' },
  ],
};

const VP = { once: true, margin: '-60px' };

export default function About() {
  const { lang } = useLanguage();
  const about = lang === 'fr' ? aboutFr : aboutEn;

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <ChapterHeader number="02" title={about.chapterTitle} italic />

        <div className="about-layout">
          {/* Left: pull quote + body */}
          <div className="about-left">
            <motion.blockquote
              className="pull-quote"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.8 }}
            >
              {about.pullQuote}
            </motion.blockquote>

            <motion.div
              className="about-body"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p>{about.p1}</p>
              <p>{about.p2}</p>
            </motion.div>
          </div>

          {/* Right: values */}
          <div className="about-right">
            {about.values.map((v, i) => (
              <motion.div
                key={v.label}
                className="value-card"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ x: 5 }}
              >
                <span className="value-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4 className="value-label">{v.label}</h4>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
