import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
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
            <h1 className={`text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r leading-tight ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-500' 
                : 'from-blue-400 to-blue-500'
            } bg-clip-text text-transparent`}>
              Hi, I'm Suyash Roy
            </h1>
            <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Computer Science Graduate Student & Software Developer
            </p>
            <p className={`text-lg mb-12 max-w-2xl mx-auto h-16 leading-relaxed flex ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            <span className="flex items-center text-transparent">text transparent</span>
              Currently pursuing MS in Computer Science at USC. Experienced in enterprise software development 
              with expertise in J2EE frameworks and modern web technologies.
            </p>
          </div>
          <div className="h-10"></div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center my-8">
            {/* <Link 
              to="/projects" 
              className={`px-12 py-4 mx-4 text-center rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-700 hover:to-teal-800 border border-emerald-500/20' 
                  : 'bg-gradient-to-r from-emerald-700 to-teal-800 text-white hover:from-emerald-800 hover:to-teal-900 border border-emerald-600/30'
              }`}
            >
              View My Work
            </Link> */}
            <Link 
              to="/projects" 
              className={`w-40 px-12 py-4 mx-4 text-center rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm ${
                isDarkMode 
                  ? 'border-2 border-emerald-500/50 text-white hover:bg-emerald-600/20 hover:border-emerald-400' 
                  : 'border-2 border-blue-500/60 text-gray-900 hover:bg-blue-100 hover:border-blue-500'
              }`}
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className={`w-40 px-12 py-4 mx-4 text-center rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm ${
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
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className={`text-3xl font-bold ${isDarkMode ? 'text-emerald-400' : 'text-blue-700'}`}>MS</div>
              <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Computer Science at USC</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${isDarkMode ? 'text-teal-400' : 'text-blue-500'}`}>3.43/4.0</div>
              <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>MS GPA</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${isDarkMode ? 'text-green-400' : 'text-blue-600'}`}>Actively Seeking</div>
              <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Current Internship</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
