import React from 'react';

interface AboutJobProps {
  isDarkMode: boolean;
}

const AboutJob: React.FC<AboutJobProps> = ({ isDarkMode }) => {
  const containerClasses = `p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`;
  const headingClasses = `text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`;
  const listClasses = `space-y-2 list-decimal pl-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`;
  const bulletListClasses = `space-y-2 list-disc pl-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`;

  return (
    <div className={containerClasses}>
      <div className="grid grid-cols-1 gap-4">
        {/* Job Description */}
        <div>
          <h2 className={headingClasses}>About the Job</h2>
          <ol className={listClasses}>
            <li>Develop and maintain web applications using React, Node.js, and other modern technologies.</li>
            <li>Collaborate with cross-functional teams to design and implement new features.</li>
            <li>Optimize application performance and ensure code quality.</li>
            <li>Stay up-to-date with the latest industry trends and best practices.</li>
          </ol>
        </div>

        {/* Benefits */}
        <div>
          <h2 className={headingClasses}>Benefits</h2>
          <ul className={bulletListClasses}>
            <li>Competitive salary and bonus structure</li>
            <li>Comprehensive health insurance coverage</li>
          </ul>
        </div>

        {/* Schedule */}
        <div>
          <h2 className={headingClasses}>Schedule</h2>
          <ul className={bulletListClasses}>
            <li>Flexible working hours</li>
          </ul>
        </div>

        {/* Supplemental pay taxes */}
        <div>
          <h2 className={headingClasses}>Supplemental pay taxes</h2>
          <ul className={bulletListClasses}>
            <li>Yearly performance bonuses</li>
            <li>Comprehensive health insurance coverage</li>
          </ul>
        </div>

        <div>
          <h2 className={headingClasses}>Work Location: in-person</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutJob;
