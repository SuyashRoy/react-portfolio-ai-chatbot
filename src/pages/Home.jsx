import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  const { isDarkMode } = useTheme();
  
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className={`relative transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white' 
        : 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 text-gray-900'
    }`}>
      <ParticleBackground />
      {/* <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold">
      SR
      </div> */}
      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 bg-gradient-to-r leading-tight ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-500' 
                : 'from-blue-400 to-blue-500'
            } bg-clip-text text-transparent`}>
              Hi, I'm Suyash Roy
            </h1>
            <p className={`text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 leading-relaxed px-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Computer Science Graduate Student & Software Developer
            </p>
            <p className={`md:text-lg mb-8 md:mb-12 leading-relaxed px-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Currently pursuing MS in Computer Science at USC. Experienced in enterprise software development 
              with expertise in J2EE frameworks and modern web technologies.
            </p>
          </div>
          <div className="h-10"></div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-6 justify-center items-center my-8 px-4">
            <Link 
              to="/projects" 
              className={`flex justify-center items-center w-50 sm:w-auto min-w-[160px] px-8 sm:px-8 md:px-12 py-4 sm:py-4 text-center rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm ${
                isDarkMode 
                  ? 'border-2 border-emerald-500/50 text-white hover:bg-emerald-600/20 hover:border-emerald-400' 
                  : 'border-2 border-blue-500/60 text-gray-900 hover:bg-blue-100 hover:border-blue-500'
              }`}
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className={`flex justify-center items-center w-50 sm:w-auto min-w-[160px] px-8 sm:px-8 md:px-12 py-4 sm:py-4 text-center rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm ${
                isDarkMode 
                  ? 'border-2 border-emerald-500/50 text-white hover:bg-emerald-600/20 hover:border-emerald-400' 
                  : 'border-2 border-blue-500/60 text-gray-900 hover:bg-blue-100 hover:border-blue-500'
              }`}
            >
              Get In Touch
            </Link>
          </div>
          <div className="h-5"></div>
          {/* Quick Stats */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <div className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-emerald-400' : 'text-blue-700'}`}>MS</div>
              <div className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Computer Science at USC</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-teal-400' : 'text-blue-500'}`}>3.43/4.0</div>
              <div className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>MS GPA</div>
            </div>
            <div className="text-center">
              <div className={`text-xl md:text-2xl lg:text-3xl font-bold ${isDarkMode ? 'text-green-400' : 'text-blue-600'}`}>Actively Seeking</div>
              <div className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Internships</div>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
      <div className="bottom-8 md:bottom-10 absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className={`text-md md:text-sm mb-3 md:mb-4 font-medium drop-shadow-lg md:h-8 ${
          isDarkMode ? 'text-gray-200' : 'text-gray-700'
        }`}>
          Scroll down to know more
        </p>
        <button 
          onClick={scrollDown}
          className={`animate-bounce p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 drop-shadow-lg flex justify-center items-center`}
          aria-label="Scroll down"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
      </div>

      
      
      {/* Bottom Section - Continue to About */}
      <div className={`relative z-10 min-h-screen flex items-center justify-center px-4 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950' 
          : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100'
      }`}>
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-500' 
                : 'from-blue-500 to-blue-600'
            } bg-clip-text text-transparent px-4`}>
              Ready to Learn More?
            </h2>
            <p className={`text-lg md:text-xl mb-8 md:mb-12 leading-relaxed px-4 h-10 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Discover my journey, skills, and experiences in detail
            </p>
          </div>
          <Link 
            to="/about" 
            className={`sm:flex sm:justify-center sm:items-center md:inline-block px-8 sm:px-12 md:px-16 py-4 md:py-5 text-center rounded-full font-semibold text-lg md:text-xl shadow-lg hover:shadow-xl mx-4 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-700 hover:to-teal-800' 
                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
            }`}
          >
            <span className="text-transparent">S</span>
            Continue to About
            <span className="text-transparent">R</span>
          </Link>
          <div className="h-3"></div>
          <div className="mt-12 md:mt-16">
            <p className={`text-sm px-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Scroll down or click above to continue your exploration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
