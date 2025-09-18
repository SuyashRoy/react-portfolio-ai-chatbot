import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Update body class when theme changes
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Dark mode colors
      dark: {
        background: 'from-slate-900 via-slate-800 to-slate-950',
        surface: 'bg-slate-800/50',
        text: 'text-white',
        textSecondary: 'text-gray-300',
        accent: 'text-emerald-400',
        border: 'border-slate-600/30',
        navbar: 'bg-slate-900/95',
      },
      // Light mode colors
      light: {
        // background: 'from-gray-50 via-slate-50 to-blue-50',
        background: 'bg-white',
        surface: 'bg-white',
        text: 'text-black',
        textSecondary: 'text-gray-700',
        accent: 'text-emerald-600',
        border: 'border-slate-200/50',
        navbar: 'bg-white/95',
      },
    },
    gradients: {
      dark: {
        primary: 'from-emerald-400 via-teal-500 to-green-600',
        secondary: 'from-emerald-500 to-teal-600',
        accent: 'from-emerald-600 to-emerald-700',
      },
      light: {
        primary: 'from-emerald-600 via-teal-600 to-green-700',
        secondary: 'from-emerald-700 to-teal-700',
        accent: 'from-emerald-800 to-emerald-900',
      },
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
