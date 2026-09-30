import type { Project } from '../types/project';

export const professionalProjects: Project[] = [
  {
    title: "Peerception",
    tagline: {
      fr: "Application web",
      en: "Web application"
    },
    description: {
      fr: "Logiciel de modélisation financière pour la création de modèles financiers.",
      en: "Financial modeling software for creating financial models."
    },
    image: "./peerception.png",
    status: "Terminé",
    techStack: ["FastAPI", "React", "Redis", "Kafka", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "CI/CD"],
    features: [
      {
        fr: "Mise en place d'un service de mailing",
        en: "Mail service implementation"
      },
      {
        fr: "Implémentation du Role Base Access Control",
        en: "Role-Based Access Control implementation"
      },
      {
        fr: "Mise en place du partage de modèles",
        en: "Model sharing implementation"
      },
      {
        fr: "Développement et mise en place de nouvelles fonctionnalités sur le frontend",
        en: "Development and implementation of new frontend features"
      },
    ],
    liveUrl: "https://app.peerception.io",
    // repoUrl: "https://github.com/jguigli/peerception"
  },
];

