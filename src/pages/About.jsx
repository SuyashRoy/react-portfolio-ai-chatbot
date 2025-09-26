import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
  const { isDarkMode } = useTheme();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const scrollDown = () => {
    const bottomSection = document.querySelector('#bottom-section');
    if (bottomSection) {
      bottomSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll to the bottom of the page
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white' 
        : 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 text-gray-900'
    }`}>
      <ParticleBackground />
      
      <div className="relative z-10 mx-auto px-4 py-20 pt-24">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 h-20">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-600' 
                : 'from-blue-400 to-blue-500'
            } bg-clip-text text-transparent px-4`}>
              About Me
            </h1>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            {/* Profile Image */}
            <div className="flex justify-center order-first lg:order-first">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-54 lg:h-54 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/DSC_0278 copy.JPG" 
                  alt="Suyash Roy - Professional Profile" 
                  className="w-full h-full object-cover object-top"
                />
                <div className={`absolute inset-0 rounded-full ring-4 ${
                  isDarkMode 
                    ? 'ring-emerald-500/30' 
                    : 'ring-blue-500/30'
                }`}></div>
              </div>
            </div>
            
            {/* About Text */}
            <div className="space-y-6 text-center lg:text-left order-last lg:order-last">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${
                isDarkMode ? 'text-emerald-400' : 'text-blue-600'
              }`}>My Story</h2>
              <p className={`text-sm md:text-base leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm Suyash Roy, a passionate computer science professional currently pursuing my Master's degree 
                at the University of Southern California. My journey in technology started with curiosity about 
                how software systems work and has evolved into expertise in full-stack development and enterprise solutions.
              </p>
              <p className={`text-sm md:text-base leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                With experience at Bain Capability Network and expertise in J2EE frameworks alongside modern technologies 
                like ReactJS, I enjoy bridging the gap between complex backend systems and intuitive user interfaces. 
                I believe in continuous learning and applying cutting-edge technologies to solve real-world problems.
              </p>
            </div>
          </div>
          <div className="h-5"></div>
          {/* Skills & Interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Technical Skills */}
            <div className={`backdrop-blur-sm rounded-xl p-6 md:p-8 text-center ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-600/30' 
                : 'bg-orange-100 border-slate-200/50'
            } border`}>
              <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 ${
                isDarkMode ? 'text-emerald-400' : 'text-blue-600'
              }`}>Technical Skills</h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <h4 className={`text-base md:text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Frontend</h4>
                  <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>ReactJS, HTML, CSS, JavaScript</p>
                </div>
                <div>
                  <h4 className={`text-base md:text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Backend</h4>
                  <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Java, Python, J2EE (Spring, Struts, Hibernate), SQL</p>
                </div>
                <div>
                  <h4 className={`text-base md:text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Data Science and Machine Learning</h4>
                  <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Python, Artifical Intelligence, NLP, Information Retrieval</p>
                </div>
                <div>
                  <h4 className={`text-base md:text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Tools & Version Control</h4>
                  <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Git, Development Tools, Alteryx, Enterprise Frameworks</p>
                </div>
              </div>
            </div>
            
            {/* Interests */}
            <div className={`backdrop-blur-sm rounded-xl p-6 md:p-8 text-center ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-600/30' 
                : 'bg-orange-100 border-slate-200/50'
            } border`}>
              <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 ${
                isDarkMode ? 'text-teal-400' : 'text-blue-500'
              }`}>Professional Interests</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="relative flex items-center min-h-[48px] md:h-12">
                  <div className={`absolute left-4 md:left-10 w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-emerald-400' : 'bg-blue-500'
                  }`}></div>
                  <span className={`w-full text-center px-8 md:px-6 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Enterprise Software Development</span>
                </div>
                <div className="relative flex items-center min-h-[48px] md:h-12">
                  <div className={`absolute left-4 md:left-10 w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-teal-400' : 'bg-teal-600'
                  }`}></div>
                  <span className={`w-full text-center px-8 md:px-6 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Consulting & Data Analysis</span>
                </div>
                <div className="relative flex items-center min-h-[48px] md:h-12">
                  <div className={`absolute left-4 md:left-10 w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-green-400' : 'bg-green-600'
                  }`}></div>
                  <span className={`w-full text-center px-8 md:px-6 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Full-Stack Web Development</span>
                </div>
                <div className="relative flex items-center min-h-[48px] md:h-12">
                  <div className={`absolute left-4 md:left-10 w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-emerald-500' : 'bg-blue-600'
                  }`}></div>
                  <span className={`w-full text-center px-8 md:px-6 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Data Science and Machine Learning</span>
                </div>
                <div className="relative flex items-center min-h-[48px] md:h-12">
                  <div className={`absolute left-4 md:left-10 w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-teal-500' : 'bg-teal-700'
                  }`}></div>
                  <span className={`w-full text-center px-8 md:px-6 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Continuous Learning & Innovation</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-4"></div>
          {/* Values */}
          <div className="text-center mt-16 md:mt-20">
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 h-10 ${
              isDarkMode ? 'text-teal-200' : 'text-pink-400'
            }`}>My Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className={`backdrop-blur-sm rounded-lg p-4 md:p-6 bg-transparent`}>
                <h4 className={`text-lg md:text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-emerald-400' : 'text-blue-600'
                }`}>Innovation</h4>
                <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Always pushing boundaries and exploring new technologies</p>
              </div>
              <div className={`backdrop-blur-sm rounded-lg p-4 md:p-6 bg-transparent`}>
                <h4 className={`text-lg md:text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-teal-400' : 'text-blue-500'
                }`}>Collaboration</h4>
                <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Believing in the power of teamwork and shared knowledge</p>
              </div>
              <div className={`backdrop-blur-sm rounded-lg p-4 md:p-6 bg-transparent`}>
                <h4 className={`text-lg md:text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-green-400' : 'text-blue-700'
                }`}>Learning</h4>
                <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Continuous growth and staying curious</p>
              </div>
            </div>
          </div>
        </div>
        <div className='h-25'></div>
        {/* Scroll Indicator */}
        <div className="h-5 sm:h-5"></div>
        <div className="bottom-2 md:bottom-10 absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
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

      {/* Bottom Section - Continue to Education */}
      <div id="bottom-section" className={`relative z-10 min-h-screen flex items-center justify-center px-4 ${
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
            <p className={`text-lg md:text-xl mb-8 md:mb-12 leading-relaxed px-4 h-14 md:h-10 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Explore my educational background and academic achievements
            </p>
          </div>
          <Link 
            to="/education" 
            className={`sm:flex sm:justify-center sm:items-center md:inline-block px-8 sm:px-12 md:px-16 py-4 md:py-5 text-center rounded-full font-semibold text-lg md:text-xl shadow-lg hover:shadow-xl mx-4 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-700 hover:to-teal-800' 
                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
            }`}
          >
            <span className="text-transparent">S</span>
            Continue to Education
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

export default About;
