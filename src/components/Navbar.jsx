import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`${
      isDarkMode ? 'bg-slate-900/95 text-white border-slate-700/50' : 'bg-yellow-50/95 text-gray-900 border-yellow-200/50'
    } backdrop-blur-md fixed top-0 w-full shadow-xl z-40 border-b transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
          <span className="text-transparent">S</span>
            <div className={`w-8 h-8 bg-gradient-to-r ${
              isDarkMode ? 'from-emerald-500 to-teal-600' : 'from-blue-500 to-blue-600'
            } rounded-lg flex items-center justify-center `}>
              <span className="text-white font-bold text-sm">SR</span>
            </div>
            <span className="text-transparent">R</span>
            <span className={`text-xl font-bold bg-gradient-to-r ${
              isDarkMode ? 'from-emerald-400 to-teal-500' : 'from-blue-500 to-blue-600'
            } bg-clip-text text-transparent`}>
              Suyash Roy
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center space-x-8 xl:space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap w-40 ${
                    isActive(item.path)
                      ? `${isDarkMode ? 'text-emerald-400' : 'text-blue-600'}`
                      : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Theme Toggle - Desktop */}
          <div className="hidden lg:flex flex-shrink-0">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 flex items-center ${
                isDarkMode ? 'text-gray-300 hover:text-white hover:bg-slate-700/50' : 'text-blue-600 hover:text-blue-800 hover:bg-yellow-100'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 flex items-center ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-blue-600 hover:text-blue-800'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} focus:outline-none`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
              isDarkMode ? 'bg-slate-800/95' : 'bg-yellow-50/95'
            } backdrop-blur-md rounded-lg mt-2 mb-4 border ${
              isDarkMode ? 'border-slate-600/30' : 'border-yellow-200/50'
            } shadow-xl`}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? `${isDarkMode ? 'text-emerald-400 bg-emerald-600/20' : 'text-blue-600 bg-blue-100'}`
                      : `${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-slate-700/50' : 'text-gray-600 hover:text-gray-900 hover:bg-slate-100'}`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
