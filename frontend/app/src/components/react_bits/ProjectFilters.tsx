import React from 'react';
import type { ProjectStatus } from '../../types/project';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectFiltersProps {
  selectedStatus: ProjectStatus | 'all';
  onStatusChange: (status: ProjectStatus | 'all') => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ selectedStatus, onStatusChange }) => {
  const { language } = useLanguage();

  const statusTranslations: Record<string, { fr: string; en: string }> = {
    all: { fr: 'Tous', en: 'All' },
    'En cours': { fr: 'En cours', en: 'In Progress' },
    'Terminé': { fr: 'Terminé', en: 'Completed' },
    'Prototype': { fr: 'Prototype', en: 'Prototype' }
  };

  const filters: Array<{ value: ProjectStatus | 'all'; label: string }> = [
    { value: 'all', label: statusTranslations.all[language] },
    { value: 'Terminé', label: statusTranslations['Terminé'][language] },
    { value: 'En cours', label: statusTranslations['En cours'][language] },
    { value: 'Prototype', label: statusTranslations['Prototype'][language] }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onStatusChange(filter.value)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedStatus === filter.value
              ? 'bg-gray-700 text-white border border-gray-600'
              : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:bg-gray-800 hover:text-gray-300'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;

