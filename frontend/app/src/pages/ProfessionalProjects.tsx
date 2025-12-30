import TextType from '../components/react_bits/TextType';
import ProjectsGrid from '../components/react_bits/ProjectsCarousel';
import { professionalProjects } from '../data/pro_projects';

export default function ProfessionalProjects() {
  return (
    <>
      <div className='flex flex-col items-center w-full'>
        {/* Content Section */}
        <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <ProjectsGrid projects={professionalProjects} />
        </div>

        {/* TextType Section */}
        <div className="w-full flex justify-center py-12 md:py-16">
          <TextType
            text="Unlimited possibilities"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100"
            typingSpeed={110}
            pauseDuration={3000}
            loop={true}
            showCursor={true}
            startOnVisible={true}
          />
        </div>
      </div>
    </>
  )
}

