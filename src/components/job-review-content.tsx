import React from 'react';
import { MapPinIcon, CircleStackIcon } from '@heroicons/react/24/outline';
import JobSkills from './skills';
import AboutJob from './about';
import Footer from './footer';
import JobButton from './buttons';
import { useDarkMode } from './darkmode/darkmode';

const JobContent: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`flex ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
      {/* Left side (80%) */}
      <div className="w-[75%]">
        <div className={`ml-[30px] ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <div className="flex items-center">
            <h1 className="text-[30px] font-medium">Senior Product Designer</h1>
            <span className={`text-sm ml-[20px] mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Posted 2 days ago</span>
            <button className={`text-sm font-medium rounded-xl ml-[12px] px-2 py-1 mt-2 ${isDarkMode ? 'bg-green-800 text-green-300' : 'bg-green-100 text-green-600'}`}>
              Open
            </button>
          </div>
          <div className="flex items-center mt-4">
            <MapPinIcon className={`w-5 h-5 mr-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            <span className={`font-medium text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Delaware, USA</span>
            <div className="ml-[20px] flex">
              <CircleStackIcon className={`w-5 h-5 mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={`font-medium text-lg ml-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>$300k - $400k</span>
            </div>
          </div>
        </div>
        {/* Border line for the left side */}
        <div className={`mt-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}></div>
        <JobSkills isDarkMode={isDarkMode} />
        <div className={`mt-3 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}></div>
        <AboutJob isDarkMode={isDarkMode} />
        <div className={`mt-3 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}></div>
        <Footer isDarkMode={isDarkMode} />
      </div>

      {/* Right side (20%) */}
      <div className="w-[25%] relative">
        {/* Straight border line for the right side */}
        <div className={`absolute top-0 left-0 bottom-0 border-l ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}></div>
        {/* You can add content for the right side here */}
        <JobButton />
      </div>
    </div>
  );
};

export default JobContent;
