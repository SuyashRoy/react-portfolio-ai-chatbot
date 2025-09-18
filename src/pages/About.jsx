import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
  const { isDarkMode } = useTheme();
  
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
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-600' 
                : 'from-blue-400 to-blue-500'
            } bg-clip-text text-transparent`}>
              About Me
            </h1>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-54 h-54 rounded-full overflow-hidden shadow-2xl">
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
            <div className="space-y-6 text-center">
              <h2 className={`text-3xl font-bold mb-6 ${
                isDarkMode ? 'text-emerald-400' : 'text-blue-600'
              }`}>My Story</h2>
              <p className={`text-base leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm Suyash Roy, a passionate computer science professional currently pursuing my Master's degree 
                at the University of Southern California. My journey in technology started with curiosity about 
                how software systems work and has evolved into expertise in full-stack development and enterprise solutions.
              </p>
              <p className={`text-base leading-relaxed ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Technical Skills */}
            <div className={`backdrop-blur-sm rounded-xl p-8 text-center ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-600/30' 
                : 'bg-orange-100 border-slate-200/50'
            } border`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-emerald-400' : 'text-blue-600'
              }`}>Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Frontend</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>ReactJS, HTML, CSS, JavaScript</p>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Backend</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Java, Python, J2EE (Spring, Struts, Hibernate), SQL</p>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Data Science and Machine Learning</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Python, Artifical Intelligence, NLP, Information Retrieval</p>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Tools & Version Control</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Git, Development Tools, Alteryx, Enterprise Frameworks</p>
                </div>
              </div>
            </div>
            
            {/* Interests */}
            <div className={`backdrop-blur-sm rounded-xl p-8 text-center ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-600/30' 
                : 'bg-orange-100 border-slate-200/50'
            } border`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-teal-400' : 'text-blue-500'
              }`}>Professional Interests</h3>
              <div className="space-y-6">
                <div className="relative flex items-center h-12">
                  <div className={`absolute left-10 w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-emerald-400' : 'bg-blue-500'
                  }`}></div>
                  <span className={`w-full text-center px-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Enterprise Software Development</span>
                </div>
                <div className="relative flex items-center h-12">
                  <div className={`absolute left-10 w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-teal-400' : 'bg-teal-600'
                  }`}></div>
                  <span className={`w-full text-center px-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Consulting & Data Analysis</span>
                </div>
                <div className="relative flex items-center h-12">
                  <div className={`absolute left-10 w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-green-400' : 'bg-green-600'
                  }`}></div>
                  <span className={`w-full text-center px-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Full-Stack Web Development</span>
                </div>
                <div className="relative flex items-center h-12">
                  <div className={`absolute left-10 w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-emerald-500' : 'bg-blue-600'
                  }`}></div>
                  <span className={`w-full text-center px-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Data Science and Machine Learning</span>
                </div>
                <div className="relative flex items-center h-12">
                  <div className={`absolute left-10 w-2 h-2 rounded-full ${
                    isDarkMode ? 'bg-teal-500' : 'bg-teal-700'
                  }`}></div>
                  <span className={`w-full text-center px-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Continuous Learning & Innovation</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="text-center mt-20">
            <h3 className={`text-3xl h-15 font-bold mb-8 flex justify-center items-center ${
              isDarkMode ? 'text-teal-200' : 'text-pink-400'
            }`}>My Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`backdrop-blur-sm rounded-lg p-6 bg-transparent`}>
                <h4 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-emerald-400' : 'text-blue-600'
                }`}>Innovation</h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Always pushing boundaries and exploring new technologies</p>
              </div>
              <div className={`backdrop-blur-sm rounded-lg p-6 bg-transparent`}>
                <h4 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-teal-400' : 'text-blue-500'
                }`}>Collaboration</h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Believing in the power of teamwork and shared knowledge</p>
              </div>
              <div className={`backdrop-blur-sm rounded-lg p-6 bg-transparent`}>
                <h4 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-green-400' : 'text-blue-700'
                }`}>Learning</h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Continuous growth and staying curious</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
