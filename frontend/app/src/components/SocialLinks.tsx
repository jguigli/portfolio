import React from 'react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/jguigli"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="GitHub"
        title="GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5 md:w-6 md:h-6"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.387 7.867 10.91.575.106.785-.248.785-.554 0-.274-.01-1.001-.016-1.964-3.2.695-3.878-1.542-3.878-1.542-.523-1.328-1.278-1.681-1.278-1.681-1.045-.715.079-.7.079-.7 1.157.081 1.766 1.188 1.766 1.188 1.028 1.762 2.697 1.253 3.354.958.104-.745.402-1.254.73-1.542-2.553-.29-5.236-1.277-5.236-5.683 0-1.255.449-2.282 1.184-3.087-.119-.29-.513-1.457.112-3.04 0 0 .966-.309 3.166 1.178a10.95 10.95 0 0 1 2.882-.388c.977.004 1.962.132 2.882.388 2.2-1.487 3.164-1.178 3.164-1.178.627 1.583.233 2.75.114 3.04.737.805 1.183 1.832 1.183 3.087 0 4.418-2.688 5.389-5.252 5.673.414.356.783 1.057.783 2.132 0 1.54-.014 2.78-.014 3.158 0 .309.208.667.79.554C20.713 21.383 24 17.083 24 12 24 5.648 18.852.5 12 .5Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/joël-guigli-b969a5144/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5 md:w-6 md:h-6"
          fill="currentColor"
        >
          <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.983 2.12 4.983 3.5zM.293 8.25H4.71V24H.293V8.25zM8.432 8.25h4.21v2.13h.06c.586-1.11 2.017-2.28 4.154-2.28 4.445 0 5.265 2.93 5.265 6.74V24h-4.417v-7.83c0-1.87-.033-4.28-2.607-4.28-2.61 0-3.01 2.04-3.01 4.14V24H8.432V8.25z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;


