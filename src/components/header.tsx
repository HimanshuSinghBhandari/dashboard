import React from 'react';
import Navbar from './navbar';
import { BellIcon, ChevronDownIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useDarkMode, darkModeButtonStyles } from './darkmode/darkmode';

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`shadow-sm p-4 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className={`p-3 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <span className="font-bold text-xl">Logo</span>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Dark mode button, Notification and User */}
        <div className="flex flex-row items-center space-x-4">
          <button
            className={`${darkModeButtonStyles.base} ${
              isDarkMode ? darkModeButtonStyles.dark : darkModeButtonStyles.light
            } flex items-center justify-center px-3 py-2 rounded-full`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-700" />
            )}
          </button>
          <BellIcon className="w-6 h-6" />
          <img
            src="https://logo.clearbit.com/atlassian.com"
            alt="Atlassian Logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <ChevronDownIcon className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
