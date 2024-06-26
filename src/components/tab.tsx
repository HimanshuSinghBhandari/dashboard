import React, { useState } from 'react';
import JobContent from './job-review-content';
import { useDarkMode } from './darkmode/darkmode';

const JobTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('job review');
  const { isDarkMode } = useDarkMode();

  const tabs = ['job review', 'applicant', 'match', 'message'];

  const renderContent = () => {
    switch (activeTab) {
      case 'job review':
        return <div><JobContent /></div>;
      case 'applicant':
        return <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Content for Applicant</div>;
      case 'match':
        return <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Content for Match</div>;
      case 'message':
        return <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Content for Message</div>;
      default:
        return null;
    }
  };

  return (
    <div className={`w-full ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
      <div className="flex border-b border-gray-400 dark:border-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 text-lg font-medium focus:outline-none ${
              activeTab === tab
                ? `text-[#DC4A2D] border-b-2 border-[#DC4A2D] ${isDarkMode ? 'text-orange-400' : 'text-[#DC4A2D]'}`
                : `${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className={`mt-6 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default JobTabs;
