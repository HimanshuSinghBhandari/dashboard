import React from 'react';

interface JobSkillsProps {
  isDarkMode: boolean;
}

const JobSkills: React.FC<JobSkillsProps> = ({ isDarkMode }) => {
  const skills = [
    { name: 'Figma' },
    { name: 'Adobe' },
    { name: 'Adobe XD' },
  ];

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
      <div className="flex flex-row space-x-[110px]">
        {/* Skills Required */}
        <div>
          <h2 className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Skills Required</h2>
          <div className="flex flex-col space-y-1">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`border rounded-lg px-2 py-1 text-sm ${
                  isDarkMode
                    ? 'border-gray-600 bg-gray-700 text-gray-300'
                    : 'border-gray-300 bg-white text-gray-800'
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Preferred Language */}
        <div>
          <h2 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Preferred Language</h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>English</p>
        </div>

        {/* Type */}
        <div>
          <h2 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Type</h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Full Time</p>
        </div>

        {/* Year of Experience */}
        <div>
          <h2 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Year of Experience</h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>3+ years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default JobSkills;
