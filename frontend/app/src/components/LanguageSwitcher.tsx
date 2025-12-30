import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-1.5 shadow-lg">
      {/* Language buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLanguage('fr')}
          className={`flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200 ${
            language === 'fr'
              ? 'bg-gray-700 text-white'
              : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
          }`}
          aria-label="Français"
          title="Français"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 640 480"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fillRule="evenodd" strokeWidth="1pt">
              <path fill="#fff" d="M0 0h640v480H0z" />
              <path fill="#00267f" d="M0 0h213.3v480H0z" />
              <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
            </g>
          </svg>
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200 ${
            language === 'en'
              ? 'bg-gray-700 text-white'
              : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
          }`}
          aria-label="English"
          title="English"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 640 480"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="a">
                <path fillOpacity=".7" d="M-85.3 0h682.6v512h-682.6z" />
              </clipPath>
            </defs>
            <g clipPath="url(#a)" transform="translate(80) scale(.94)">
              <g strokeWidth="1pt">
                <path fill="#006" d="M-256 0H768v512H-256z" />
                <path
                  fill="#fff"
                  d="M-256 0v57.2L653.3 512H768v-57.2L-141.3 0H-256zM768 0v57.2L-141.3 512H-256v-57.2L653.3 0H768z"
                />
                <path
                  fill="#fff"
                  d="M170.6 0v512h170.6V0H170.6zM-256 170.6v170.6H768V170.6H-256z"
                />
                <path
                  fill="#c00"
                  d="M-256 204.8v102.4H768V204.8H-256zM204.8 0v512h102.4V0H204.8zM-256 512L85.3 341.3h76.4L-179.7 512H-256zM-256 0L85.3 170.6H8.9L-256 38.2V0zm606.4 170.6L768 0h76.8L606.4 170.6h-76.8zm-76.8 170.6L768 512h-76.8l-54.4-170.6h76.8z"
                />
                <path
                  fill="#c00"
                  d="M-256 218.5v75.1H768v-75.1H-256zM218.5 0v512h75.1V0h-75.1zM-256 512l89.2-66.7h-75.1L-256 435.8V512zm0-512l89.2 66.7h-75.1L-256 76.2V0zm606.4 66.7L768 0v76.2l-54.3 66.7h-75.1zm-75.1 311.1L768 512v-76.2l-54.3-66.7h-75.1z"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

