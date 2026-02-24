export type Language = 'fr' | 'en';

export interface SkillCategory {
  icon: string;
  label: string;
  skills: { name: string; level: number }[];
}

export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  typeClass: string;
  current: boolean;
  tech: string[];
  bullets: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  learned: string[];
  tech: string[];
  accent: string;
  icon: string;
  featured: boolean;
}

export interface LangItem {
  name: string;
  level: string;
  pct: number;
  flag: string;
}

export interface Distinction {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Translations {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
    hireMe: string;
    langSwitch: string;
  };
  hero: {
    available: string;
    roles: string[];
    desc: string;
    viewProjects: string;
    contactMe: string;
    yearsNum: string;
    yearsLabel: string;
    projectsNum: string;
    projectsLabel: string;
    techNum: string;
    techLabel: string;
  };
  skills: {
    label: string;
    title: string;
    titleHighlight: string;
    categories: SkillCategory[];
  };
  experience: {
    label: string;
    title: string;
    titleHighlight: string;
    jobs: Job[];
  };
  projects: {
    label: string;
    title: string;
    titleHighlight: string;
    filterAll: string;
    filters: string[];
    featuredLabel: string;
    problemLabel: string;
    learnedLabel: string;
    items: ProjectItem[];
  };
  education: {
    label: string;
    title: string;
    titleHighlight: string;
    degree: string;
    school: string;
    period: string;
    highlights: string[];
    langTitle: string;
    languages: LangItem[];
    distinctionsTitle: string;
    distinctions: Distinction[];
  };
  contact: {
    label: string;
    title: string;
    titleHighlight: string;
    intro: string;
    infoTitle: string;
    availTitle: string;
    availSub: string;
    linkLabels: {
      email: string;
      phone: string;
      location: string;
      linkedin: string;
      github: string;
    };
    form: {
      nameLbl: string;
      namePh: string;
      emailLbl: string;
      emailPh: string;
      subjectLbl: string;
      subjectPh: string;
      msgLbl: string;
      msgPh: string;
      submit: string;
      sending: string;
      sent: string;
      error: string;
      configNote: string;
    };
  };
  footer: {
    copy: string;
  };
}

// ─── COMMON DATA (language-agnostic) ─────────────────────────────────────────

const skillCategories = (lang: Language): SkillCategory[] => [
  {
    icon: '🖥️',
    label: 'Front-End',
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 92 },
      { name: 'RxJS', level: 82 },
      { name: 'Redux', level: 80 },
      { name: 'SCSS / HTML5', level: 85 },
    ],
  },
  {
    icon: '⚙️',
    label: 'Back-End',
    skills: [
      { name: 'NestJS', level: 82 },
      { name: 'Node.js', level: 78 },
      { name: 'REST / GraphQL', level: 85 },
      { name: 'PostgreSQL', level: 72 },
      { name: 'MongoDB', level: 68 },
      { name: 'Ruby on Rails', level: 65 },
    ],
  },
  {
    icon: '📱',
    label: 'Mobile',
    skills: [
      { name: 'React Native', level: 80 },
      { name: 'Android SDK', level: 75 },
      { name: 'Java', level: 80 },
      { name: 'Firebase', level: 80 },
      { name: 'Socket.IO', level: 75 },
    ],
  },
  {
    icon: '☁️',
    label: lang === 'fr' ? 'Cloud & DevOps' : 'Cloud & DevOps',
    skills: [
      { name: 'AWS AppSync', level: 78 },
      { name: 'AWS Cognito', level: 76 },
      { name: 'Docker', level: 65 },
      { name: 'CI/CD', level: 68 },
      { name: 'Jest / RTL', level: 80 },
      { name: 'Git', level: 90 },
    ],
  },
];

// ─── FRENCH ──────────────────────────────────────────────────────────────────

export const fr: Translations = {
  nav: {
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expérience',
    projects: 'Projets',
    education: 'Formation',
    contact: 'Contact',
    hireMe: 'Me recruter',
    langSwitch: 'EN',
  },
  hero: {
    available: 'Disponible pour de nouvelles opportunités',
    roles: [
      'Développeur Full Stack',
      'Développeur Front-End',
      'Ingénieur Logiciel',
    ],
    desc: "Ingénieur logiciel passionné avec <strong>2 ans d'expérience</strong> en développement web & mobile. Spécialisé en <strong>TypeScript, Angular, React</strong> et architectures cloud AWS. J'aime créer des produits performants et des expériences utilisateurs mémorables.",
    viewProjects: 'Voir mes projets',
    contactMe: 'Me contacter',
    yearsNum: '2',
    yearsLabel: "Années d'exp.",
    projectsNum: '4+',
    projectsLabel: 'Projets majeurs',
    techNum: '10+',
    techLabel: 'Technologies',
  },
  skills: {
    label: 'Stack Technique',
    title: 'Développeur ',
    titleHighlight: 'Full Stack',
    categories: skillCategories('fr'),
  },
  experience: {
    label: 'Parcours',
    title: 'Expérience ',
    titleHighlight: 'Professionnelle',
    jobs: [
      {
        role: 'Développeur Front-End & Mobile',
        company: 'ESmart',
        location: 'Montréal',
        period: '2025 – Présent',
        type: 'CDI',
        typeClass: 'type-cdi',
        current: true,
        tech: ['Java', 'Android', 'AWS AppSync', 'GraphQL', 'Cognito', 'Datadog'],
        bullets: [
          "Développement d'une application mobile Java connectée à AWS (AppSync, GraphQL, Cognito).",
          "Implémentation d'un système d'alertes en temps réel améliorant la réactivité des utilisateurs.",
          "Optimisation des flux d'authentification et des requêtes cloud, réduisant les coûts AWS de 20 %.",
          "Intégration de monitoring Datadog augmentant la stabilité en production.",
          "Développement UI/UX complet de l'application mobile.",
        ],
      },
      {
        role: 'Développeur Full Stack',
        company: 'Stingray',
        location: 'Montréal',
        period: '2024',
        type: 'Stage',
        typeClass: 'type-stage',
        current: false,
        tech: ['Ruby on Rails', 'React', 'TypeScript', 'PostgreSQL', 'Redux', 'AWS'],
        bullets: [
          "Contribution au développement d'une plateforme SaaS (Ruby on Rails, React, PostgreSQL).",
          'Développement de nouvelles fonctionnalités front-end en TypeScript.',
          "Participation active aux revues de code et aux améliorations d'architecture.",
          'Travail en équipe avec des développeurs seniors sur la conception et la priorisation.',
        ],
      },
      {
        role: "Chef d'Équipe Logiciel",
        company: 'Polystar',
        location: 'Polytechnique Montréal',
        period: '2022 – 2024',
        type: 'Académique',
        typeClass: 'type-academique',
        current: false,
        tech: ['C++', 'Embedded Systems', 'Testing', 'Git'],
        bullets: [
          "Direction technique d'une équipe de 5 développeurs.",
          "Conception et implémentation d'algorithmes embarqués en C++.",
          "Définition de l'architecture logicielle et coordination de l'intégration système.",
          'Encadrement technique et suivi de la qualité du code.',
        ],
      },
    ],
  },
  projects: {
    label: 'Portfolio',
    title: 'Projets ',
    titleHighlight: 'Techniques',
    filterAll: 'Tous',
    filters: ['Full Stack', 'Mobile', 'Front-End', 'Embedded'],
    featuredLabel: '⭐ Featured',
    problemLabel: 'Problème',
    learnedLabel: "Ce que j'ai appris",
    items: [
      {
        id: 1,
        title: 'Find 7 Differences Game',
        subtitle: 'Application de jeu multijoueur en temps réel',
        category: 'Full Stack',
        problem:
          "Créer un jeu multijoueur engageant avec synchronisation en temps réel et UI responsive sur tous les appareils.",
        learned: [
          'WebSocket connections pour un gameplay en temps réel',
          'Design responsive avec Figma',
          'Tests unitaires Jest avec 100% de couverture',
        ],
        tech: ['Angular', 'TypeScript', 'NestJS', 'MongoDB', 'Socket.IO'],
        accent: '#7c3aed',
        icon: '🎮',
        featured: true,
      },
      {
        id: 2,
        title: 'Android Driver Alert App',
        subtitle: 'Alertes routières pour conducteurs de camions',
        category: 'Mobile',
        problem:
          "Les conducteurs ont besoin de notifications d'événements routiers en temps réel sans consulter leur téléphone au volant.",
        learned: [
          "Déploiement d'application Android de zéro",
          'Monitoring avec Datadog',
          'Optimisation auth Cognito — coûts AWS réduits de 20%',
        ],
        tech: ['Java', 'Android SDK', 'AWS AppSync', 'AWS Cognito', 'Datadog'],
        accent: '#06b6d4',
        icon: '🚛',
        featured: true,
      },
      {
        id: 3,
        title: 'SaaS Platform – Stingray',
        subtitle: 'Plateforme entreprise scalable',
        category: 'Full Stack',
        problem:
          "Développement de fonctionnalités scalables pour une plateforme SaaS servant plusieurs clients avec de hautes exigences de performance.",
        learned: [
          'Collaboration avec seniors sur conception et priorisation',
          "Architecture d'entreprise et patterns cloud",
          'Bonnes pratiques infrastructure AWS',
        ],
        tech: ['Ruby on Rails', 'React', 'Redux', 'PostgreSQL', 'Python', 'AWS'],
        accent: '#10b981',
        icon: '🏢',
        featured: true,
      },
      {
        id: 4,
        title: 'Migration Excel → Angular SPA',
        subtitle: "Modernisation d'outils métier",
        category: 'Front-End',
        problem:
          "Analyser et formaliser des règles métier complexes issues d'Excel pour les migrer vers une application web moderne et scalable.",
        learned: [
          'Analyse de règles métier complexes',
          'Architecture SPA modulaire et scalable',
          'Documentation technique complète',
        ],
        tech: ['Angular', 'TypeScript', 'NestJS', 'PostgreSQL', 'Figma', 'SCSS'],
        accent: '#f59e0b',
        icon: '📊',
        featured: false,
      },
      {
        id: 5,
        title: 'React Native App',
        subtitle: 'Application mobile multiplateforme',
        category: 'Mobile',
        problem:
          "Développer une application mobile moderne avec messagerie temps réel accessible sur iOS et Android.",
        learned: [
          'Développement multiplateforme iOS & Android',
          'Authentification sécurisée Firebase',
          'Architecture modulaire évolutive',
        ],
        tech: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
        accent: '#ec4899',
        icon: '📱',
        featured: false,
      },
      {
        id: 6,
        title: 'Robotics Competition Software',
        subtitle: 'Logiciel embarqué pour robots compétitifs',
        category: 'Embedded',
        problem:
          "Créer un logiciel de contrôle de robots haute performance avec des procédures de test fiables pour les compétitions.",
        learned: [
          "Implémentation d'algorithmes C++ pour la compétition",
          'Tests logiciels exhaustifs pour validation',
          'Coordination inter-équipes pour construction robot',
        ],
        tech: ['C++', 'Embedded Systems', 'Git', 'Team Collaboration'],
        accent: '#ef4444',
        icon: '🤖',
        featured: false,
      },
    ],
  },
  education: {
    label: 'Formation',
    title: 'Éducation & ',
    titleHighlight: 'Distinctions',
    degree: 'Baccalauréat en Génie Logiciel',
    school: 'Polytechnique Montréal',
    period: '2021 – 2025',
    highlights: [
      'Spécialisation en développement logiciel et algorithmes',
      'Assistant de laboratoire – INF2010 (Algorithmes & Structures de données)',
      'Compétition internationale RoboMaster – Seattle (2023) & Colorado (2024)',
    ],
    langTitle: 'Langues',
    languages: [
      { name: 'Français', level: 'Courant', pct: 100, flag: '🇫🇷' },
      { name: 'Anglais', level: 'Professionnel', pct: 82, flag: '🇬🇧' },
    ],
    distinctionsTitle: 'Distinctions & Implication',
    distinctions: [
      {
        icon: '🏆',
        title: 'RoboMaster International Competition',
        subtitle: 'Seattle, Washington — 2023',
        description:
          "Compétition internationale de robotique — participation en tant que Chef d'Équipe Logiciel avec Polystar.",
      },
      {
        icon: '🏆',
        title: 'RoboMaster International Competition',
        subtitle: 'Colorado — 2024',
        description:
          "Deuxième participation internationale, leadership technique renforcé et meilleures performances en compétition.",
      },
      {
        icon: '🎓',
        title: 'Assistant de Laboratoire',
        subtitle: 'Polytechnique Montréal',
        description:
          "Assistant pour INF2010 – Algorithmes & Structures de données. Encadrement d'étudiants et évaluation des travaux pratiques.",
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Travaillons ',
    titleHighlight: 'Ensemble',
    intro:
      "Je suis disponible pour de nouvelles opportunités — rôles full-time, freelance ou collaborations. N'hésitez pas à me contacter !",
    infoTitle: 'Informations de contact',
    availTitle: 'Disponible pour de nouvelles opportunités',
    availSub: 'Réponse sous 24h',
    linkLabels: {
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    form: {
      nameLbl: 'Nom',
      namePh: 'Votre nom',
      emailLbl: 'Email',
      emailPh: 'votre@email.com',
      subjectLbl: 'Sujet',
      subjectPh: 'Opportunité de travail, collaboration...',
      msgLbl: 'Message',
      msgPh: 'Décrivez votre projet ou opportunité...',
      submit: 'Envoyer le message',
      sending: 'Envoi en cours...',
      sent: 'Message envoyé !',
      error: "Erreur d'envoi. Veuillez réessayer.",
      configNote: 'Note: configurez EmailJS dans .env pour activer l\'envoi direct.',
    },
  },
  footer: {
    copy: '© {year} Melvice Junior Guimfack · Montréal, QC',
  },
};

// ─── ENGLISH ─────────────────────────────────────────────────────────────────

export const en: Translations = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
    hireMe: 'Hire Me',
    langSwitch: 'FR',
  },
  hero: {
    available: 'Available for new opportunities',
    roles: [
      'Full Stack Developer',
      'Front-End Developer',
      'Software Engineer',
    ],
    desc: 'Passionate software engineer with <strong>2 years of experience</strong> in web & mobile development. Specialized in <strong>TypeScript, Angular, React</strong> and AWS cloud architectures. I love building high-performance products and memorable user experiences.',
    viewProjects: 'View my projects',
    contactMe: 'Contact me',
    yearsNum: '2',
    yearsLabel: 'Years of exp.',
    projectsNum: '4+',
    projectsLabel: 'Major projects',
    techNum: '10+',
    techLabel: 'Technologies',
  },
  skills: {
    label: 'Tech Stack',
    title: 'Full Stack ',
    titleHighlight: 'Developer',
    categories: skillCategories('en'),
  },
  experience: {
    label: 'Career',
    title: 'Professional ',
    titleHighlight: 'Experience',
    jobs: [
      {
        role: 'Front-End & Mobile Developer',
        company: 'ESmart',
        location: 'Montreal',
        period: '2025 – Present',
        type: 'Full-time',
        typeClass: 'type-cdi',
        current: true,
        tech: ['Java', 'Android', 'AWS AppSync', 'GraphQL', 'Cognito', 'Datadog'],
        bullets: [
          'Built a Java mobile application connected to AWS (AppSync, GraphQL, Cognito).',
          'Implemented a real-time alert system improving user responsiveness.',
          'Optimized authentication flows and cloud queries, reducing AWS costs by 20%.',
          'Integrated Datadog monitoring increasing production stability.',
          'Designed and developed the full application UI/UX.',
        ],
      },
      {
        role: 'Full Stack Developer',
        company: 'Stingray',
        location: 'Montreal',
        period: '2024',
        type: 'Internship',
        typeClass: 'type-stage',
        current: false,
        tech: ['Ruby on Rails', 'React', 'TypeScript', 'PostgreSQL', 'Redux', 'AWS'],
        bullets: [
          'Contributed to a SaaS platform (Ruby on Rails, React, PostgreSQL).',
          'Developed new front-end features in TypeScript.',
          'Actively participated in code reviews and architecture improvements.',
          'Collaborated with senior developers on feature design and prioritization.',
        ],
      },
      {
        role: 'Software Team Lead',
        company: 'Polystar',
        location: 'Polytechnique Montréal',
        period: '2022 – 2024',
        type: 'Academic',
        typeClass: 'type-academique',
        current: false,
        tech: ['C++', 'Embedded Systems', 'Testing', 'Git'],
        bullets: [
          'Led a team of 5 developers technically.',
          'Designed and implemented embedded algorithms in C++.',
          'Defined software architecture and coordinated system integration.',
          'Provided technical mentoring and code quality oversight.',
        ],
      },
    ],
  },
  projects: {
    label: 'Portfolio',
    title: 'Technical ',
    titleHighlight: 'Projects',
    filterAll: 'All',
    filters: ['Full Stack', 'Mobile', 'Front-End', 'Embedded'],
    featuredLabel: '⭐ Featured',
    problemLabel: 'Problem',
    learnedLabel: 'What I learned',
    items: [
      {
        id: 1,
        title: 'Find 7 Differences Game',
        subtitle: 'Real-time multiplayer web game',
        category: 'Full Stack',
        problem:
          'Creating an engaging multiplayer game with real-time synchronization and responsive UI across all devices.',
        learned: [
          'Built WebSocket connections for real-time gameplay',
          'Designed responsive UI with Figma',
          'Developed comprehensive unit tests with Jest at 100% coverage',
        ],
        tech: ['Angular', 'TypeScript', 'NestJS', 'MongoDB', 'Socket.IO'],
        accent: '#7c3aed',
        icon: '🎮',
        featured: true,
      },
      {
        id: 2,
        title: 'Android Driver Alert App',
        subtitle: 'Road alerts for truck drivers',
        category: 'Mobile',
        problem:
          'Truck drivers need real-time road event notifications without constantly checking their phones while driving.',
        learned: [
          'Developed and deployed Android app from scratch',
          'Integrated Datadog monitoring',
          'Optimized Cognito auth — AWS costs reduced by 20%',
        ],
        tech: ['Java', 'Android SDK', 'AWS AppSync', 'AWS Cognito', 'Datadog'],
        accent: '#06b6d4',
        icon: '🚛',
        featured: true,
      },
      {
        id: 3,
        title: 'SaaS Platform – Stingray',
        subtitle: 'Scalable enterprise platform',
        category: 'Full Stack',
        problem:
          'Building scalable features for a production SaaS platform serving multiple clients with high performance requirements.',
        learned: [
          'Worked with senior devs on design and prioritization',
          'Enterprise-level architecture patterns and cloud',
          'AWS infrastructure best practices',
        ],
        tech: ['Ruby on Rails', 'React', 'Redux', 'PostgreSQL', 'Python', 'AWS'],
        accent: '#10b981',
        icon: '🏢',
        featured: true,
      },
      {
        id: 4,
        title: 'Excel → Angular SPA Migration',
        subtitle: 'Business tool modernization',
        category: 'Front-End',
        problem:
          'Analyzing and formalizing complex Excel business rules to migrate them to a modern, scalable web application.',
        learned: [
          'Complex business rule analysis',
          'Modular and scalable SPA architecture',
          'Complete technical documentation',
        ],
        tech: ['Angular', 'TypeScript', 'NestJS', 'PostgreSQL', 'Figma', 'SCSS'],
        accent: '#f59e0b',
        icon: '📊',
        featured: false,
      },
      {
        id: 5,
        title: 'React Native App',
        subtitle: 'Cross-platform mobile app',
        category: 'Mobile',
        problem:
          'Building a modern mobile app with real-time messaging accessible on both iOS and Android.',
        learned: [
          'Cross-platform iOS & Android development',
          'Secure Firebase authentication',
          'Modular, scalable architecture',
        ],
        tech: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
        accent: '#ec4899',
        icon: '📱',
        featured: false,
      },
      {
        id: 6,
        title: 'Robotics Competition Software',
        subtitle: 'Embedded software for competitive robots',
        category: 'Embedded',
        problem:
          'Creating high-performance robot control software with reliable testing for international competition environments.',
        learned: [
          'Implemented robot algorithms in C++ for competition',
          'Comprehensive software tests for verification',
          'Cross-team collaboration for robot construction',
        ],
        tech: ['C++', 'Embedded Systems', 'Git', 'Team Collaboration'],
        accent: '#ef4444',
        icon: '🤖',
        featured: false,
      },
    ],
  },
  education: {
    label: 'Education',
    title: 'Education & ',
    titleHighlight: 'Achievements',
    degree: 'Bachelor of Software Engineering',
    school: 'Polytechnique Montréal',
    period: '2021 – 2025',
    highlights: [
      'Specialization in software development and algorithms',
      'Lab Assistant – INF2010 (Algorithms & Data Structures)',
      'International RoboMaster Competition – Seattle (2023) & Colorado (2024)',
    ],
    langTitle: 'Languages',
    languages: [
      { name: 'French', level: 'Fluent', pct: 100, flag: '🇫🇷' },
      { name: 'English', level: 'Professional', pct: 82, flag: '🇬🇧' },
    ],
    distinctionsTitle: 'Achievements & Involvement',
    distinctions: [
      {
        icon: '🏆',
        title: 'RoboMaster International Competition',
        subtitle: 'Seattle, Washington — 2023',
        description:
          'International robotics competition — participated as Software Team Lead with Polystar.',
      },
      {
        icon: '🏆',
        title: 'RoboMaster International Competition',
        subtitle: 'Colorado — 2024',
        description:
          'Second international competition, improved technical leadership and competition performance.',
      },
      {
        icon: '🎓',
        title: 'Lab Teaching Assistant',
        subtitle: 'Polytechnique Montréal',
        description:
          'Assistant for INF2010 – Algorithms & Data Structures. Student mentoring and practical work evaluation.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: "Let's Work ",
    titleHighlight: 'Together',
    intro:
      "I'm available for new opportunities — full-time roles, freelance or collaborations. Don't hesitate to reach out!",
    infoTitle: 'Contact information',
    availTitle: 'Available for new opportunities',
    availSub: 'Response within 24h',
    linkLabels: {
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    form: {
      nameLbl: 'Name',
      namePh: 'Your name',
      emailLbl: 'Email',
      emailPh: 'your@email.com',
      subjectLbl: 'Subject',
      subjectPh: 'Job opportunity, collaboration...',
      msgLbl: 'Message',
      msgPh: 'Describe your project or opportunity...',
      submit: 'Send message',
      sending: 'Sending...',
      sent: 'Message sent!',
      error: 'Send error. Please try again.',
      configNote: 'Note: configure EmailJS in .env to enable direct sending.',
    },
  },
  footer: {
    copy: '© {year} Melvice Junior Guimfack · Montreal, QC',
  },
};

export const translations: Record<Language, Translations> = { fr, en };
