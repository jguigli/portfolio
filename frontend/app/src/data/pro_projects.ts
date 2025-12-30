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
  {
    title: "ERP-HER",
    tagline: {
      fr: "Application web",
      en: "Web application"
    },
    description: {
      fr: "Logiciel ERP complet de gestion d'entreprise avec interface admin/client, gestion financière, RH et analytique.",
      en: "Complete ERP software for business management with admin/client interface, financial, HR and analytics management."
    },
    image: "./ERP-HER.png",
    status: "En cours",
    techStack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
    features: [
      {
        fr: "Interface admin/client",
        en: "Admin/client interface"
      },
      {
        fr: "Gestion financière",
        en: "Financial management"
      },
      {
        fr: "Gestion RH",
        en: "HR management"
      },
      {
        fr: "Gestion analytique",
        en: "Analytics management"
      },
    ],
  },
  {
    title: "Peerception",
    tagline: {
      fr: "Site web",
      en: "Website"
    },
    description: {
      fr: "Nouvelle version du site web de la société Peerception.",
      en: "New version of the Peerception company website."
    },
    image: "./peerception-site.png",
    status: "Prototype",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    features: [
      {
        fr: "Design responsive",
        en: "Responsive design"
      },
      {
        fr: "Animations fluides",
        en: "Smooth animations"
      },
    ],
    // liveUrl: "https://demo.example.com",
  },
];

