import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { isDarkMode } = useTheme();

  const projects = [
    {
      id: 1,
      title: "AI-Powered Portfolio Website",
      description: "A modern portfolio website with AI chatbot integration, meteor shower animations, and responsive design.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "Tailwind CSS", "Gemini AI", "TSParticles"],
      category: "web",
      github: "https://github.com/username/portfolio",
      live: "https://portfolio-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Express", "MongoDB", "Stripe", "JWT"],
      category: "web",
      github: "https://github.com/username/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Prisma"],
      category: "web",
      github: "https://github.com/username/taskmanager",
      live: "https://taskmanager-demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location-based forecasts, interactive maps, and data visualization.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "D3.js", "OpenWeather API", "Chart.js", "Geolocation"],
      category: "web",
      github: "https://github.com/username/weather",
      live: "https://weather-demo.com",
      featured: false
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and bill payments.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Biometric Auth", "Encryption"],
      category: "mobile",
      github: "https://github.com/username/banking",
      live: null,
      featured: true
    },
    {
      id: 6,
      title: "Machine Learning Model",
      description: "Predictive analytics model for customer behavior analysis using machine learning algorithms.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
      category: "ai",
      github: "https://github.com/username/ml-model",
      live: null,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Applications' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML Projects' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white' 
        : 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 text-gray-900'
    }`}>
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-20 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-600' 
                : 'from-blue-300 to-blue-400'
            } bg-clip-text text-transparent`}>
              Projects
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              A showcase of my work and creativity
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-6xl font-bold opacity-50">🚀</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        <span>📁</span>
                        <span>Code</span>
                      </a>
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                        >
                          <span>🌐</span>
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* All Projects */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-3xl font-bold text-purple-400 mb-4 md:mb-0">All Projects</h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
                  <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <div className="text-4xl font-bold opacity-50">💻</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
                      >
                        <span>📁</span>
                        <span>Code</span>
                      </a>
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors"
                        >
                          <span>🌐</span>
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Project Stats */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold text-pink-400 mb-6 text-center">Project Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{projects.length}</div>
                <div className="text-gray-300">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{featuredProjects.length}</div>
                <div className="text-gray-300">Featured Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">15+</div>
                <div className="text-gray-300">Technologies Used</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
