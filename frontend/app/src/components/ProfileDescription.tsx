import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProfileDescription: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center md:text-left whitespace-pre-line">
          {t('profile.description')}
        </p>
        <div className="mt-8 flex justify-center md:justify-end">
          <img
            src="/42_Logo.png"
            alt="42 Logo"
            className="h-12 md:h-16 brightness-0 invert"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDescription;

