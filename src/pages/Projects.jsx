import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const Projects = () => {
  const { isDarkMode } = useTheme();

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
          <div className="text-center mb-16 h-20">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-600' 
                : 'from-blue-300 to-blue-400'
            } bg-clip-text text-transparent`}>
              Projects
            </h1>
          </div>
          {/* Featured Projects */}
          <div className="mb-16 relative">
            <h2 className= {`text-5xl font-bold ${isDarkMode ? 'text-emerald-400' : 'text-red-500'} mb-8 text-center h-25`}>Featured Projects</h2>
            
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
                        <span className='text-transparent'>S</span>
                        <span>View Code</span>
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
        </div>
      </div>
      <div className='h-5'></div>
    </div>
  );
};

export default Projects;
