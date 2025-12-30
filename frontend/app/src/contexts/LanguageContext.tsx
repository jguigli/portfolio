import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    'software.engineer': 'Ingénieur Logiciel',
    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Découvrez mes réalisations et projets personnels',
    'project.status.in.progress': 'En cours',
    'project.status.completed': 'Terminé',
    'project.status.prototype': 'Prototype',
    'project.live.demo': 'Live Demo',
    'project.github': 'GitHub',
    'project.case.study': 'Case Study',
    'projects.no.projects': 'Aucun projet trouvé pour ce filtre.',
    'tabs.profile': 'Description du profil',
    'tabs.projects.professional': 'Projets professionnels',
    'tabs.projects.personal': 'Projets personnels',
    'tabs.projects.academic': 'Projets académiques',
    'profile.description': `Je suis Joël Guigli, développeur logiciel passionné, formé à l'école 42 depuis 2021. Spécialisé en développement full-stack et en architecture logicielle, je conçois des solutions robustes, performantes et évolutives, adaptées aux besoins métiers et aux technologies modernes.

Mon expertise couvre l'ensemble du cycle de développement, du backend au front-end, jusqu'au déploiement. J'ai une solide expérience dans le développement d'API avec FastAPI, la conteneurisation avec Docker, ainsi que la création d'interfaces modernes et performantes en React et TypeScript. Je travaille régulièrement avec des bases de données relationnelles, notamment PostgreSQL, en accordant une attention particulière à la qualité du code, aux performances et à la maintenabilité.

Au fil de mes projets, j'ai développé une approche orientée architecture scalable, bonnes pratiques logicielles et expérience utilisateur. J'attache une grande importance à la clarté des systèmes, à leur évolutivité et à leur capacité à répondre efficacement aux contraintes techniques et fonctionnelles.

Intéressé par l'IA générative et son intégration dans des produits concrets, je suis familier avec des outils de développement assistés par l'IA comme Cursor, ainsi qu'avec plusieurs grands modèles de langage tels que GPT-4/5, Claude Sonnet, DeepSeek et Le Chat. J'explore ces technologies pour améliorer la productivité, automatiser certains processus et concevoir des fonctionnalités intelligentes à forte valeur ajoutée.

Curieux, rigoureux et autonome, j'interviens sur des projets nécessitant une vision technique globale, une exécution fiable et une collaboration efficace, que ce soit pour développer un produit de bout en bout ou renforcer une équipe existante.`
  },
  en: {
    'software.engineer': 'Software Engineer',
    'projects.title': 'My Projects',
    'projects.subtitle': 'Discover my achievements and personal projects',
    'project.status.in.progress': 'In Progress',
    'project.status.completed': 'Completed',
    'project.status.prototype': 'Prototype',
    'project.live.demo': 'Live Demo',
    'project.github': 'GitHub',
    'project.case.study': 'Case Study',
    'projects.no.projects': 'No projects found for this filter.',
    'tabs.profile': 'Profile Description',
    'tabs.projects.professional': 'Professional Projects',
    'tabs.projects.personal': 'Personal Projects',
    'tabs.projects.academic': 'Academic Projects',
    'profile.description': `I am Joël Guigli, a passionate software developer, trained at 42 school since 2021. Specialized in full-stack development and software architecture, I design robust, performant, and scalable solutions, adapted to business needs and modern technologies.

My expertise covers the entire development cycle, from backend to front-end, through to deployment. I have solid experience in API development with FastAPI, containerization with Docker, as well as creating modern and performant interfaces in React and TypeScript. I regularly work with relational databases, particularly PostgreSQL, paying special attention to code quality, performance, and maintainability.

Through my projects, I have developed an approach focused on scalable architecture, software best practices, and user experience. I attach great importance to system clarity, their evolutivity, and their ability to effectively respond to technical and functional constraints.

Interested in generative AI and its integration into concrete products, I am familiar with AI-assisted development tools like Cursor, as well as several large language models such as GPT-4/5, Claude Sonnet, DeepSeek, and Le Chat. I explore these technologies to improve productivity, automate certain processes, and design intelligent features with high added value.

Curious, rigorous, and autonomous, I work on projects requiring a global technical vision, reliable execution, and effective collaboration, whether to develop a product end-to-end or strengthen an existing team.`
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

