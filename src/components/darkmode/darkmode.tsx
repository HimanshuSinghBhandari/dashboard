import React, { useState, createContext, useContext } from 'react';

// Dark mode context
interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// Dark mode provider
export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Dark mode hook
export const useDarkMode = () => useContext(DarkModeContext);

// Dark mode button styles
export const darkModeButtonStyles = {
  base: 'px-4 py-2 rounded-md transition-colors duration-300',
  light: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  dark: 'bg-gray-700 text-gray-200 hover:bg-gray-600',
};
