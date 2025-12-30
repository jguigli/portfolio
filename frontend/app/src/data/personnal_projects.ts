import type { Project } from '../types/project';

export const personnalProjects: Project[] = [
  {
    title: "Guidely",
    tagline: {
      fr: "Application web",
      en: "Web application"
    },
    description: {
      fr: "Application web de planification d'activités intelligent avec IA et l'API de Google Maps.",
      en: "Intelligent web application for activity planning with AI and Google Maps API."
    },
    image: "./guidely.png",
    status: "En cours",
    techStack: ["MapBox", "React", "TypeScript", "Tailwind CSS", "FastAPI", "LangChain", "Celery", "RabbitMQ", "Redis"],
    features: [
      {
        fr: "Authentification JWT",
        en: "JWT Authentication"
      },
      {
        fr: "Tests unitaires",
        en: "Unit tests"
      },
      {
        fr: "Rate limiting",
        en: "Rate limiting"
      }
    ],
    // liveUrl: "https://demo.example.com",
  },
  {
    title: "Northrend Conquest",
    tagline: {
      fr: "Serveur World of Warcraft",
      en: "World of Warcraft server"
    },
    description: {
      fr: "Serveur de jeu AzerothCore WOTLK moddé avec des modules personnalisés.",
      en: "AzerothCore WOTLK game server modded with custom modules."
    },
    image: "",
    status: "Prototype",
    techStack: ["C++", "AzerothCore", "Docker"],
    features: [
      {
        fr: "Guilde contre Guilde",
        en: "Guild vs Guild"
      },
      {
        fr: "Système de loot",
        en: "Loot system"
      },
      {
        fr: "Système de création d'objets",
        en: "Item creation system"
      },
      {
        fr: "Système de conquête de zones",
        en: "Zone conquest system"
      },
    ],
    // liveUrl: "https://demo.example.com",
  },
  {
    title: "no-brainer-dev-scraper",
    tagline: {
      fr: "Scraper de données",
      en: "Data scraper"
    },
    description: {
      fr: "Scraper de données sur le domaine de la tech et du dev.",
      en: "Data scraper for tech and dev domain."
    },
    image: "",
    status: "Terminé",
    techStack: ["Python", "Playwright", "Scrapy", "MongoDB"],
    features: [
      {
        fr: "Sites scrapés : Github Trending repos, TechCrunch, OpenAI Blog",
        en: "Scraped sites: Github Trending repos, TechCrunch, OpenAI Blog"
      },
      {
        fr: "Stockage des données dans une base de données MongoDB",
        en: "Data storage in MongoDB database"
      },
    ],
    repoUrl: "https://github.com/jguigli/no-brainer-dev-scraper"
  },
  {
    title: "spotify-playlist-maker",
    tagline: {
      fr: "Création de playlists Spotify",
      en: "Spotify playlist creation"
    },
    description: {
      fr: "Création de playlists en fonction des genres musicaux avec les titres likés sur Spotify.",
      en: "Create playlists based on music genres with liked tracks on Spotify."
    },
    image: "",
    status: "Terminé",
    techStack: ["Python", "Spotify API"],
    features: [
      {
        fr: "Création de playlists Spotify",
        en: "Spotify playlist creation"
      },
      {
        fr: "Ajout de titres à la playlist",
        en: "Add tracks to playlist"
      },
    ],
    repoUrl: "https://github.com/jguigli/spotify-playlist-maker"
  },
];

