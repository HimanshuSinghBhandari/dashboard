import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BriefcaseIcon, ChatBubbleBottomCenterIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Check the current URL and set the activeOption state accordingly
    if (location.pathname.includes('/jobs')) {
      setActiveOption('Jobs');
    } else if (location.pathname.includes('/message')) {
      setActiveOption('Message');
    } else if (location.pathname.includes('/payment')) {
      setActiveOption('Payment');
    } else {
      setActiveOption(null);
    }
  }, [location.pathname]);

  const options = [
    { name: 'Jobs', icon: BriefcaseIcon },
    { name: 'Message', icon: ChatBubbleBottomCenterIcon },
    { name: 'Payment', icon: CurrencyDollarIcon }
  ];

  return (
    <nav className="border border-1 px-2 py-2 rounded-[120px] flex justify-center">
      <ul className="flex space-x-[25px]">
        {options.map((option) => (
          <li key={option.name}>
            <button
              className={`px-4 py-2 rounded-[70px] transition-colors duration-200 flex items-center ${
                activeOption === option.name
                  ? 'bg-[#DC4A2D] text-white'
                  : 'text-gray-400 hover:bg-orange-200'
              }`}
              onClick={() => setActiveOption(option.name)}
            >
              <option.icon className="h-5 w-5 mr-2" />
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
