export type ProjectStatus = "En cours" | "Terminé" | "Prototype";
export type ProjectCategory = "personnel" | "académique" | "professionnel";

export interface TranslatedText {
  fr: string;
  en: string;
}

export interface Project {
  title: string | TranslatedText;
  tagline: string | TranslatedText;
  description: string | TranslatedText;
  image: string;
  status?: ProjectStatus;
  category?: ProjectCategory;
  techStack: string[];
  features: string[] | TranslatedText[];
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
}

