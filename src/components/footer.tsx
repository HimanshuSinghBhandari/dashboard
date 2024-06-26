import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const containerClasses = `py-8 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`;
  const headingClasses = `text-gray-700 font-medium mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`;
  const textClasses = `${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`;
  const logoClasses = `w-8 h-8 mr-4 object-cover ${isDarkMode ? 'filter brightness-90' : ''}`;

  return (
    <div className={containerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-5">
        {/* Atlassian Logo */}
        <div className="flex items-center">
          <img
            src="https://logo.clearbit.com/atlassian.com"
            alt="Atlassian Logo"
            className={logoClasses}
          />
          <span className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>Atlassian</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* Company Size */}
          <div>
            <h3 className={headingClasses}>Company Size</h3>
            <p className={textClasses}>1,001-5,000 employees</p>
          </div>

          {/* Type */}
          <div>
            <h3 className={headingClasses}>Type</h3>
            <p className={textClasses}>Private</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* Sector */}
          <div>
            <h3 className={headingClasses}>Sector</h3>
            <p className={textClasses}>Information tech, sector</p>
          </div>

          {/* Funding */}
          <div>
            <h3 className={headingClasses}>Funding</h3>
            <p className={textClasses}>Bootstrapped</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* Founded In */}
          <div>
            <h3 className={headingClasses}>Founded In</h3>
            <p className={textClasses}>2019</p>
          </div>
          {/* Founded By */}
          <div>
            <h3 className={headingClasses}>Founded By</h3>
            <p className={textClasses}>Scoott Farquhar, Mike Cannon Brokers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
