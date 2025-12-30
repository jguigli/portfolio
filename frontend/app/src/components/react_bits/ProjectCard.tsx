import React from 'react';
import type { Project } from '../../types/project';
import { ExternalLink, Github, FileText, Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

const statusColors = {
  "En cours": "bg-blue-400/20 text-blue-300 border-blue-400/30",
  "Terminé": "bg-green-400/20 text-green-300 border-green-400/30",
  "Prototype": "bg-yellow-400/20 text-yellow-300 border-yellow-400/30"
};

const statusTranslations: Record<string, { fr: string; en: string }> = {
  "En cours": { fr: "En cours", en: "In Progress" },
  "Terminé": { fr: "Terminé", en: "Completed" },
  "Prototype": { fr: "Prototype", en: "Prototype" }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language, t } = useLanguage();
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = './Sujet.png'; // Fallback image
  };

  const getTranslatedStatus = (status?: string) => {
    if (!status) return undefined;
    return statusTranslations[status]?.[language] || status;
  };

  // Helper function to get translated text
  const getText = (text: string | { fr: string; en: string }): string => {
    if (typeof text === 'string') {
      return text; // Fallback to string if not translated
    }
    return text[language] || text.fr; // Default to French if translation missing
  };

  // Helper function to get translated features
  const getFeatures = (features: string[] | { fr: string; en: string }[]): string[] => {
    if (features.length === 0) return [];
    // Check if first item is a string (old format) or object (new format)
    if (typeof features[0] === 'string') {
      return features as string[]; // Old format, return as is
    }
    // New format with translations
    return (features as { fr: string; en: string }[]).map(feature => 
      feature[language] || feature.fr
    );
  };

  const hasImage = project.image && project.image.trim() !== '';
  
  const title = getText(project.title);
  const tagline = getText(project.tagline);
  const description = getText(project.description);
  const features = getFeatures(project.features);

  return (
    <div className="group relative h-full flex flex-col bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
      {/* Image Section - Only show if image exists */}
      {hasImage && (
        <div className="relative w-full h-48 overflow-hidden bg-gray-900/50">
          <img
            src={project.image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
            loading="lazy"
          />
          {project.status && (
            <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${statusColors[project.status]}`}>
              {getTranslatedStatus(project.status)}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Status badge - Show at top of content if no image */}
      {!hasImage && project.status && (
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm z-10 ${statusColors[project.status]}`}>
          {getTranslatedStatus(project.status)}
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-6">
        {/* Title & Tagline */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-100 mb-1 group-hover:text-gray-50 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400">{tagline}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 mb-4 flex-1">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-700/50 text-gray-300 border border-gray-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-4 space-y-1.5">
          {features.slice(0, 5).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
              <Check className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/50">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gray-700 text-gray-100 hover:bg-gray-600 transition-colors border border-gray-600/50"
              aria-label={`Voir le projet ${title} en ligne`}
            >
              <ExternalLink className="w-4 h-4" />
              {t('project.live.demo')}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors border border-gray-600/50"
              aria-label={`Voir le code source de ${title} sur GitHub`}
            >
              <Github className="w-4 h-4" />
              {t('project.github')}
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gray-700/30 text-gray-400 hover:bg-gray-700/50 transition-colors border border-gray-600/30"
              aria-label={`Lire l'étude de cas de ${title}`}
            >
              <FileText className="w-4 h-4" />
              {t('project.case.study')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

