import LanguageSwitcher from './LanguageSwitcher';
import SocialLinks from './SocialLinks';
import ShinyText from './react_bits/ShinyText';
import { useLanguage } from '../contexts/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header()
{
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/') return 'profile';
    if (path === '/projects-professional') return 'projects-professional';
    if (path === '/projects-personal') return 'projects-personal';
    if (path === '/projects-academic') return 'projects-academic';
    return 'profile';
  };

  const activeTab = getActiveTab();

  const handleTabClick = (tab: string) => {
    if (tab === 'profile') {
      navigate('/');
    } else {
      navigate(`/${tab}`);
    }
  };

  return (
    <header className="w-full text-white">
      {/* Profile Section and Tabs */}
      <div className="w-full pt-12 pb-2">
        <div className="flex flex-col items-center w-full">
          {/* Profile Section */}
          <div className="flex items-center justify-center gap-6 px-4 mb-4 md:mb-6 relative w-full max-w-7xl">
            {/* Circular Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-800/50 border border-gray-700/50 shadow-lg">
                <img
                  src="./Sujet.png"
                  alt="Joël Guigli"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = './profil.png';
                  }}
                />
              </div>
            </div>
            
            {/* Name and Title */}
            <div className="flex flex-col items-center md:items-start flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-2 text-center md:text-left">
                Joël Guigli
              </h1>
              <ShinyText
                text={t('software.engineer')}
                speed={5}
                className="text-xl md:text-2xl text-center md:text-left"
              />
            </div>

            {/* Language Switcher anchored to the right */}
            <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2">
              <LanguageSwitcher />
            </div>
            {/* Social icons slightly to the left of the flags */}
            <div className="absolute right-40 md:right-50 top-1/2 -translate-y-1/2">
              <SocialLinks />
            </div>
          </div>

          {/* Tabs Separator */}
          <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 mb-2">
            <div className="flex items-center justify-start gap-1 border-b border-gray-700/50 flex-wrap">
              <button
                onClick={() => handleTabClick('profile')}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === 'profile'
                    ? 'text-gray-100 border-gray-400'
                    : 'text-gray-500 border-transparent hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                {t('tabs.profile')}
              </button>
              <button
                onClick={() => handleTabClick('projects-professional')}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === 'projects-professional'
                    ? 'text-gray-100 border-gray-400'
                    : 'text-gray-500 border-transparent hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                {t('tabs.projects.professional')}
              </button>
              <button
                onClick={() => handleTabClick('projects-personal')}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === 'projects-personal'
                    ? 'text-gray-100 border-gray-400'
                    : 'text-gray-500 border-transparent hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                {t('tabs.projects.personal')}
              </button>
              <button
                onClick={() => handleTabClick('projects-academic')}
                className={`px-6 py-3 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === 'projects-academic'
                    ? 'text-gray-100 border-gray-400'
                    : 'text-gray-500 border-transparent hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                {t('tabs.projects.academic')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};