import React, { useState, useMemo } from 'react';
import type { Project, ProjectStatus } from '../../types/project';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const { t } = useLanguage();
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'all'>('all');

  const filteredProjects = useMemo(() => {
    if (selectedStatus === 'all') {
      return projects;
    }
    return projects.filter(project => project.status === selectedStatus);
  }, [projects, selectedStatus]);

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="w-full py-8">
      <ProjectFilters selectedStatus={selectedStatus} onStatusChange={setSelectedStatus} />
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">{t('projects.no.projects')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="w-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;

