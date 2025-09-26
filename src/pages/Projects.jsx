import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "AI-Powered Portfolio Website",
      description: "A modern portfolio website with AI chatbot integration with particle animations, AI-powered chatbot and responsive design.",
      image: "/pexels-googledeepmind-17483868.jpg",
      technologies: ["React", "Node.js", "Tailwind CSS", "Gemini AI", "TSParticles"],
      category: "web",
      github: "https://github.com/SuyashRoy/react-portfolio-ai-chatbot",
      live: "https://portfolio-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "InstaCam",
      description: "InstaCam is a social media app. It is made using React library and routing is done using React router. This app talks to a backend express app to fetch all the dynamic data from MongoDB atlas using the mongoose library.",
      image: "/pexels-pixabay-270408.jpg",
      technologies: ["React", "Express", "MongoDB", "Redux"],
      category: "web",
      github: "https://github.com/SuyashRoy/instacam",
      live: "https://ecommerce-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Mental Health Medical RAG with Semantic Analysis",
      description: "A group project where we are building a medical RAG with semantic analysis to analyse and classify the concern levels regarding mental health via social media posts.",
      image: "/pexels-googledeepmind-18069362.jpg",
      technologies: ["Machine Learning", "TypeScript", "SQL", "Natural Language Processing", "Big Data Analytics"],
      category: "web",
      github: "https://github.com/username/taskmanager",
      live: "https://taskmanager-demo.com",
      featured: true
    }
  ];


  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white' 
        : 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 text-gray-900'
    }`}>
      <ParticleBackground />
      
      <div className="relative z-10 mx-auto px-4 py-20 pt-24">
        <div>
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 h-20">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-600' 
                : 'from-blue-300 to-blue-400'
            } bg-clip-text text-transparent px-4`}>
              Projects
            </h1>
          </div>
          {/* Featured Projects */}
          <div className="mb-12 md:mb-16 relative">
            <h2 className={`h-14 text-3xl md:text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-emerald-400' : 'text-red-500'} mb-8 md:mb-12 text-center px-4`}>Featured Projects</h2>
            
            {/* Timeline for larger screens */}
            <div className="hidden lg:block">
              {/* Continuous vertical dotted line */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-px border-l-2 border-dotted ${
                isDarkMode ? 'border-blue-400' : 'border-red-600'
              }`} style={{
                top: '120px',
                height: `${featuredProjects.length * 600 + (featuredProjects.length - 1) * 96}px`
              }}></div>
              
              <div className="flex flex-col items-center relative z-10">
                {featuredProjects.map((project, index) => (
                  <React.Fragment key={project.id}>
                    {/* Diamond marker */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 ${
                      isDarkMode ? 'bg-blue-400' : 'bg-red-600'
                    } z-20`} style={{
                      top: `${120 + index * 696 + 350}px`
                    }}></div>
                    
                    <div className={`backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 group w-full max-w-lg mb-12 ${
                      isDarkMode 
                        ? 'bg-slate-800/50 border-slate-600/30 hover:border-emerald-500' 
                        : 'bg-orange-100 border-slate-200/50 hover:border-red-600'
                    }`} style={{
                      marginLeft: index % 2 === 0 ? 'calc(15% - 192px)' : 'calc(50% + 32px)',
                      marginRight: index % 2 === 0 ? 'calc(50% + 32px)' : 'calc(15% - 192px)'
                    }}>
                    <div className="h-72 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Status button */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-black text-white border-2 border-white px-4 py-2 rounded-lg text-sm font-bold">
                        <span className='text-transparent'>SR</span>
                          {project.id === 1 ? 'Completed' : 
                           project.id === 2 ? 'Completed' : 
                           project.id === 3 ? 'In Progress' : ''}
                           <span className='text-transparent'>SR</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-10">
                      <h3 className={`text-3xl font-bold mb-6 transition-colors tracking-wide ${
                        isDarkMode 
                          ? 'text-white group-hover:text-emerald-400' 
                          : 'text-gray-900 group-hover:text-red-600'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`mb-8 text-lg leading-loose tracking-wide ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{project.description}</p>
                      
                      {/* Horizontal line separator */}
                      <div className={`border-t mb-6 ${
                        isDarkMode ? 'border-gray-600' : 'border-gray-300'
                      }`}></div>
                      <div className='h-2'></div>
                      <div className="mb-8">
                        <h4 className={`text-xl font-semibold mb-6 h-10 ${
                          isDarkMode ? 'text-teal-400' : 'text-red-600'
                        }`}>Technologies Used</h4>
                        <div className="flex flex-wrap gap-4">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className={`px-5 py-3 rounded-full text-md transition-all duration-200 ${
                              isDarkMode 
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}>
                            <span className='text-transparent'>SR</span>
                              {tech}
                            <span className='text-transparent'>SR</span>
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className='h-2'></div>
                      <div className="w-full">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`w-full h-8 flex items-center justify-center space-x-3 px-6 py-3 rounded-lg transition-colors text-base font-medium ${
                            isDarkMode 
                              ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                              : 'bg-slate-200 hover:bg-slate-300 text-gray-900'
                          }`}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>
                          <span className='text-transparent'>S</span>
                          View Code
                          </span>
                        </a>
                      </div>
                    </div>
                    </div>
                    <div className='h-7'></div>
                  </React.Fragment>
                ))}
                
                {/* Horizontal line at the end */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-32 h-px border-t-2 border-dotted ${
                  isDarkMode ? 'border-blue-400' : 'border-red-600'
                }`} style={{
                  top: `${120 + (featuredProjects.length - 1) * 696 + 350 + 8}px`
                }}></div>
              </div>
            </div>
            
            {/* Mobile/Tablet Grid Layout */}
            <div className="lg:hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto justify-items-center">
                {featuredProjects.map((project) => (
                  <div key={project.id} className={`backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 group w-full max-w-md mx-auto ${
                    isDarkMode 
                      ? 'bg-slate-800/50 border-slate-600/30 hover:border-emerald-500' 
                      : 'bg-orange-100 border-slate-200/50 hover:border-red-600'
                  }`}>
                    <div className="h-48 sm:h-56 md:h-48 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Status button */}
                      <div className="absolute top-3 right-3">
                        <span className="bg-black text-white border-2 border-white px-3 py-1 rounded-lg text-xs font-bold">
                          <span className='text-transparent'>SR</span>
                          {project.id === 1 ? 'Completed' : 
                           project.id === 2 ? 'Completed' : 
                           project.id === 3 ? 'In Progress' : ''}
                           <span className='text-transparent'>SR</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 transition-colors ${
                        isDarkMode 
                          ? 'text-white group-hover:text-emerald-400' 
                          : 'text-gray-900 group-hover:text-red-600'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`mb-4 md:mb-6 text-sm md:text-base leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{project.description}</p>
                      
                      {/* Horizontal line separator */}
                      <div className={`border-t mb-4 ${
                        isDarkMode ? 'border-gray-600' : 'border-gray-300'
                      }`}></div>
                      
                      <div className="mb-4 md:mb-6">
                        <h4 className={`text-md md:text-base font-semibold mb-3 h-8 ${
                          isDarkMode ? 'text-teal-400' : 'text-red-600'
                        }`}>Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className={`px-2 md:px-3 py-1 md:py-2 rounded-full text-sm md:text-sm transition-all duration-200 ${
                              isDarkMode 
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}>
                            <span className='text-transparent'>SR</span>
                              {tech}
                              <span className='text-transparent'>SR</span>
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className='h-2'></div>
                      <div className="w-full h-10">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`w-full flex items-center justify-center space-x-2 px-4 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base font-medium ${
                            isDarkMode 
                              ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                              : 'bg-slate-200 hover:bg-slate-300 text-gray-900'
                          }`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>
                          <span className='text-transparent'>S</span>
                          View Code
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className='h-25'></div>
        <div className="h-30 sm:h-5"></div>
        <div className="bottom-2 md:bottom-10 absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className={`text-md md:text-sm mb-3 md:mb-4 font-medium drop-shadow-lg md:h-8 ${
            isDarkMode ? 'text-orange-300' : 'text-violet-700'
          }`}>
            Scroll down to know more
          </p>
          <button 
            onClick={scrollDown}
            className={`animate-bounce p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 drop-shadow-lg flex justify-center items-center ${
              isDarkMode ? 'text-orange-400 hover:text-orange-300' : 'text-violet-600 hover:text-violet-800'
            }`}
            aria-label="Scroll down"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Section - Continue to Contact */}
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
              Ready to Connect?
            </h2>
            <p className={`text-lg md:text-xl mb-8 md:mb-12 leading-relaxed px-4 h-14 md:h-10 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Let's get in touch and discuss opportunities together
            </p>
          </div>
          <Link 
            to="/contact" 
            className={`sm:flex sm:justify-center sm:items-center md:inline-block px-8 sm:px-12 md:px-16 py-4 md:py-5 text-center rounded-full font-semibold text-lg md:text-xl shadow-lg hover:shadow-xl mx-4 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-700 hover:to-teal-800' 
                : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
            }`}
          >
            <span className="text-transparent">S</span>
            Get In Touch
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

export default Projects;
