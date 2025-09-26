import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const Education = () => {
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
  const educationData = [
    {
      degree: "MS in Computer Science",
      institution: "University of Southern California",
      year: "January 2025 - Present",
      gpa: "3.43/4.0",
      description: "Pursuing MS in Computer Science with focus on software engineering, algorithms, machine learning and modern technologies. Emphasizing practical applications and research in AI systems. Developing expertise in cutting-edge computational methods.",
      courses: ["Analysis of Algorithms", "Foundations of Artificial Intelligence", "Information Retrieval and Web Search Engines", "Machine Learning for Data Science", "Natural Language Processing"]
    },
    {
      degree: "BTech. in Information Technology",
      institution: "Kalinga Institute of Industrial Technology (KIIT)",
      year: "2018 - 2022",
      gpa: "9.19/10.0",
      description: "Completed undergraduate studies in Information Technology with specialization in software development, data structures, and enterprise applications. Built strong foundation in programming and system design.",
      courses: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "Software Engineering", "Web Technologies", "Computer Networks"]
    }
  ];

  // const certifications = [
  //   {
  //     name: "J2EE Enterprise Development",
  //     issuer: "Professional Experience",
  //     date: "2022",
  //     credential: "BAIN-TMT-001"
  //   },
  //   {
  //     name: "ReactJS Development",
  //     issuer: "Professional Experience",
  //     date: "2022",
  //     credential: "UI-INTEGRATION-002"
  //   },
  //   {
  //     name: "Git Version Control",
  //     issuer: "DevOps Experience",
  //     date: "2022",
  //     credential: "VCS-003"
  //   }
  // ];

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white' 
        : 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 text-gray-900'
    }`}>
      <ParticleBackground />
      
      <div className="relative z-10 mx-auto px-4 py-20 pt-24">
        <div className="w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-600' 
                : 'from-blue-400 to-blue-500'
            } bg-clip-text text-transparent px-4`}>
              Education
            </h1>
          </div>
          
          {/* Education Timeline */}
          <div className="mb-16">
            <div className="h-10 sm:h-3"></div>
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center h-14 ${
              isDarkMode ? 'text-teal-500' : 'text-sky-600'
            }`}>Academic Background</h2>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 md:gap-8">
              {educationData.map((edu, index) => (
                <div key={index} className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 w-full max-w-md mx-auto lg:mx-0 h-full flex flex-col ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-slate-600/30' 
                    : 'bg-orange-100 border-slate-200/50'
                }`}>
                  {/* Institution Image */}
                  <div className="mb-6 text-center">
                    <img 
                      src={index === 0 ? "/USC-EG-GC-Campus-3@2x.jpg" : "/KIIT-Campus-Front-Library-1200x416.jpg"} 
                      alt={edu.institution}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                  </div>
                  
                  {/* Education Details */}
                  <div className="text-center flex-grow flex flex-col">
                    <h3 className={`text-xl font-bold mb-6 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{edu.degree}</h3>
                    
                    <h4 className={`text-lg mb-6 h-7 ${
                      isDarkMode ? 'text-emerald-400' : 'text-rose-700'
                    }`}>{edu.institution}</h4>
                    {/* GPA - Centered */}
                    <div className="text-center mb-6 h-8">
                      <div className={`text-lg font-semibold ${
                        isDarkMode ? 'text-green-400' : 'text-blue-500'
                      }`}>GPA: {edu.gpa}</div>
                    </div>
                    {/* Year */}
                    <div className="text-center mb-6">
                      <div className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{edu.year}</div>
                    </div>
                    
                    <p className={`mb-8 text-sm leading-relaxed h-28 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{edu.description}</p>
                    
                    {/* Divider Line */}
                    <div className={`w-full h-px my-8 ${
                      isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}></div>
                    
                    {/* Key Courses Section */}
                    <div className="mt-auto">
                      <h5 className={`text-md font-semibold mb-4 text-center h-8 ${
                        isDarkMode ? 'text-white' : 'text-gray-500'
                      }`}>Key Courses</h5>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {edu.courses.map((course, courseIndex) => (
                          <span key={courseIndex} className={`px-2 py-1 rounded-full text-xs ${
                            isDarkMode 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                          <span className='text-transparent'>SR</span>
                            {course}
                          <span className='text-transparent'>SR</span>
                          </span>
                        ))}
                      </div>
                      <div className='h-5'></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-7"></div>
          </div>
          
          {/* Certifications */}
          {/* <div className="mb-16">
            <h2 className={`text-3xl font-bold mb-8 text-center ${
              isDarkMode ? 'text-purple-400' : 'text-purple-400'
            }`}>Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500' 
                    : 'bg-white/80 border-slate-200/50 hover:border-purple-400'
                }`}>
                  <div className="text-center">
                    <div className="text-3xl mb-4">🏆</div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{cert.name}</h3>
                    <p className={`mb-2 ${
                      isDarkMode ? 'text-blue-400' : 'text-slate-600'
                    }`}>{cert.issuer}</p>
                    <p className={`mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{cert.date}</p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>ID: {cert.credential}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          
          {/* Learning Philosophy */}
          <div className={`backdrop-blur-sm rounded-xl p-6 md:p-8 ${
            isDarkMode 
              ? 'bg-slate-800/30 border-slate-600/30' 
              : 'bg-yellow-50 border-slate-200/50'
          }`}>
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${
              isDarkMode ? 'text-pink-400' : 'text-pink-400'
            }`}>Learning Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Continuous Learning</h3>
                <p className={`leading-relaxed text-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I believe that technology evolves rapidly, and staying current requires a commitment to 
                  continuous learning. I regularly keep up to date with the latest technologies to expand my knowledge.
                </p>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Hands-On Experience</h3>
                <p className={`leading-relaxed text-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Theory without practice is incomplete. I prefer learning by building real projects, 
                  solving actual problems, and working with teams.
                </p>
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

      {/* Bottom Section - Continue to Experience */}
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
              Discover my professional experience and career journey
            </p>
          </div>
          <Link 
            to="/experience" 
            className={`sm:flex sm:justify-center sm:items-center md:inline-block px-8 sm:px-12 md:px-16 py-4 md:py-5 text-center rounded-full font-semibold text-lg md:text-xl shadow-lg hover:shadow-xl mx-4 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-700 hover:to-teal-800' 
                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
            }`}
          >
            <span className="text-transparent">S</span>
            Continue to Experience
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

export default Education;
