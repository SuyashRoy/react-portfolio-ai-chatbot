import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// index.html sets data-theme from localStorage before React mounts, so read it back here
const initialDark = () => document.documentElement.dataset.theme !== 'light';

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialDark);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDarkMode ? '#04050d' : '#f6f7fb');
  }, [isDarkMode]);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // storage can be unavailable (private mode); the toggle still works for this visit
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
