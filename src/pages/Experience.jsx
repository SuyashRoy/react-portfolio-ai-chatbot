import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const Experience = () => {
  const { isDarkMode } = useTheme();
  const experiences = [
    {
      title: "Associate",
      company: "Bain Capability Network",
      location: "Gurugram, India",
      period: "July 2022 - December 2024",
      type: "Full-time",
      description: "Contributed to Bain's 'LUMI' telecom product, driving CAPEX/OPEX strategies, cost savings, and market expansion using geospatial analysis. Led due diligence, forecasting models, and optimized workflows, delivering key insights and cost reductions across telecom projects.",
      // achievements: [
      //   "Developed software solutions for automotive applications",
      //   "Collaborated with cross-functional teams on high-impact projects",
      //   "Gained experience with scalable software architecture",
      //   "Contributed to Tesla's innovative technology stack"
      // ],
      technologies: ["Go-to-Market Strategy (GTM)", "Cost Optimization", "Competitor Analysis", "Machine Learning", "Heavy.AI", "Alteryx", "Market Research"]
    },
    {
      title: "Analyst Intern",
      company: "Bain Capability Network",
      location: "Gurugram, India",
      period: "January 2022 - June 2022",
      type: "Internship",
      description: "Worked with a leading NA Telco on market expansion for wireless offerings, analyzing 6M+ households using data and machine learning. Developed the 'Likelihood To Switch' (LTS) metric to assess market attractiveness, applied across 5+ cases. Focused on strategic, analytical, and communication skills.",
      // achievements: [
      //   "Contributed to multiple high-profile software projects",
      //   "Gained experience with Microsoft's technology ecosystem",
      //   "Collaborated with global development teams",
      //   "Enhanced skills in enterprise software development"
      // ],
      technologies: ["Alteryx", "Microsoft Office Suite", "Competitor Analysis", "Demographic Analysis", "Python", "Geospatial Analysis"]
    },
    {
      title: "Full Stack Developer Intern",
      company: "HighRadius",
      location: "Bhubaneswar, India",
      period: "May 2021 - December 2021",
      type: "Internship",
      description: "Developed full-stack solutions using J2EE (Spring, Struts, Hibernate) and ReactJS, focusing on UI integration across multiple databases. Led end-to-end development of key functionality, ensuring seamless front-end and back-end integration, and tested peer deliverables for defect-free performance.",
      // achievements: [
      //   "Built end-to-end software solutions",
      //   "Implemented both frontend and backend components",
      //   "Delivered high-quality software products",
      //   "Collaborated with product and design teams"
      // ],
      technologies: ["React", "TypeScript", "JavaScript", "SQL", "Spring", "Struts", "Hibernate"]
    },
    {
      title: "Analyst Intern, TMT (Tech Media Telecommunications)",
      company: "Bain Capability Network",
      location: "Gurgaon, India",
      period: "January 2022 - June 2022",
      type: "Internship",
      description: "Leveraged J2EE frameworks (Spring, Struts, and Hibernate) along with ReactJS to design and setup UI Screen Integration for enterprise applications in the telecommunications sector.",
      achievements: [
        "Successfully integrated UI screens using ReactJS with J2EE backend",
        "Worked on enterprise-level CFO application systems",
        "Gained experience with Spring, Struts, and Hibernate frameworks",
        "Contributed to telecommunications technology analysis projects"
      ],
      technologies: ["ReactJS", "J2EE", "Spring", "Struts", "Hibernate", "JavaScript", "HTML", "CSS"]
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["ReactJS", "TypeScript","JavaScript", "HTML", "CSS"]
    },
    {
      category: "Backend & Frameworks",
      items: ["Python", "Node.js", "Spring", "Struts", "Hibernate", "SQL", "MongoDB"]
    },
    {
      category: "Miscellaneous Tools & Technologies",
      items: ["Git", "Alteryx", "Microsoft Office Suite", "Software Engineering", "Heavy.AI"]
    }
  ];

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
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-600' 
                : 'from-blue-400 to-blue-500'
            } bg-clip-text text-transparent`}>
              Experience
            </h1>
          </div>
          
          {/* Experience Timeline */}
          <div className="mb-16">
            <div className="h-3"></div>
            <h2 className={`text-3xl font-bold mb-8 text-center h-14 ${
              isDarkMode ? 'text-teal-500' : 'text-sky-600'
            }`}>Professional Experience</h2>
            {/* First Row - Two Cards */}
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 mb-8">
              {experiences.slice(0, 2).map((exp, index) => (
                <div key={index} className={`backdrop-blur-sm rounded-xl border transition-all duration-300 w-full max-w-md h-full flex flex-col overflow-hidden ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-slate-600/30' 
                    : 'bg-orange-100 border-slate-200/50'
                }`}>
                  {/* Company Image - At Top */}
                  <div className="w-full">
                    <img 
                      src="/Bain&Company.png" 
                      alt="Bain and Company"
                      className="w-full h-20 object-contain rounded-t-xl bg-white"
                    />
                  </div>
                  
                  {/* Experience Details */}
                  <div className="text-center flex-grow flex flex-col p-6">
                    <h3 className={`text-xl font-bold mb-6 h-8 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{exp.title}</h3>
                    
                    <h4 className={`text-lg mb-6 h-7 ${
                      isDarkMode ? 'text-emerald-400' : 'text-rose-700'
                    }`}>{exp.company}</h4>
                    
                    {/* Period and Location - Centered */}
                    <div className="text-center mb-6 h-8">
                      <div className={`text-lg font-semibold ${
                        isDarkMode ? 'text-green-400' : 'text-blue-500'
                      }`}>{exp.period}</div>
                    </div>
                    
                    {/* Location */}
                    <div className="text-center mb-6 h-6">
                      <div className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{exp.location}</div>
                    </div>
                    
                    <p className={`mb-8 text-sm leading-relaxed h-30 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{exp.description}</p>
                    
                    {/* Divider Line */}
                    <div className={`w-full h-px my-8 ${
                      isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}></div>
                    
                    {/* Key Technologies Section */}
                    <div className="mt-auto">
                      <h5 className={`text-md font-semibold mb-4 text-center h-8 ${
                        isDarkMode ? 'text-white' : 'text-gray-500'
                      }`}>Key Technologies</h5>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className={`px-2 py-1 rounded-full text-xs ${
                            isDarkMode 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            <span className='text-transparent'>SR</span>
                            {tech}
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
            
            {/* Second Row - Single Card in Center */}
            <div className='h-5'></div>
            <div className="flex justify-center items-stretch">
              <div className={`backdrop-blur-sm rounded-xl border transition-all duration-300 w-full max-w-md h-full flex flex-col overflow-hidden ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-slate-600/30' 
                  : 'bg-orange-100 border-slate-200/50'
              }`}>
                {/* Company Image - At Top */}
                <div className="w-full">
                  <img 
                    src="/HighRadius" 
                    alt="HighRadius"
                    className="w-full h-20 object-contain rounded-t-xl bg-white"
                  />
                </div>
                
                {/* Experience Details */}
                <div className="text-center flex-grow flex flex-col p-6">
                  <h3 className={`text-xl font-bold mb-6 h-7 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{experiences[2].title}</h3>
                  
                  <h4 className={`text-lg mb-6 h-7 ${
                    isDarkMode ? 'text-emerald-400' : 'text-rose-700'
                  }`}>{experiences[2].company}</h4>
                  
                  {/* Period and Location - Centered */}
                  <div className="text-center mb-6 h-8">
                    <div className={`text-lg font-semibold ${
                      isDarkMode ? 'text-green-400' : 'text-blue-500'
                    }`}>{experiences[2].period}</div>
                  </div>
                  
                  {/* Location */}
                  <div className="text-center mb-6 h-6">
                    <div className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{experiences[2].location}</div>
                  </div>
                  
                  <p className={`mb-8 text-sm leading-relaxed h-30 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{experiences[2].description}</p>
                  
                  {/* Divider Line */}
                  <div className={`w-full h-px my-8 ${
                    isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}></div>
                  
                  {/* Key Technologies Section */}
                  <div className="mt-auto">
                    <h5 className={`text-md font-semibold mb-4 text-center h-8 ${
                      isDarkMode ? 'text-white' : 'text-gray-500'
                    }`}>Key Technologies</h5>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {experiences[2].technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-2 py-1 rounded-full text-xs ${
                          isDarkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          <span className='text-transparent'>SR</span>
                          {tech}
                          <span className='text-transparent'>SR</span>
                        </span>
                      ))}
                    </div>
                    <div className='h-5'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='h-15'></div>
            {/* Scroll Indicator */}
            {/* <div className="flex flex-col items-center mt-16 mb-6">
              <div className={`text-sm font-medium h-8 mb-3 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Scroll down for Technical Skills & Career Highlights
              </div>
              <div className="flex flex-col items-center animate-bounce">
                <svg 
                  className={`w-6 h-6 ${
                    isDarkMode ? 'text-emerald-400' : 'text-blue-500'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div> */}
            {/* <div className="h-3"></div> */}
          </div>
          {/* <div className='h-3'></div> */}
          {/* Skills Overview */}
          <div className="mb-16">
            <h2 className={`text-3xl font-bold mb-8 text-center h-14 ${
              isDarkMode ? 'text-purple-400' : 'text-purple-600'
            }`}>Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-25">
              {skills.map((skill, index) => (
                <div key={index} className={`backdrop-blur-sm rounded-xl p-6 border ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700' 
                    : 'bg-orange-50 border-slate-200/50'
                }`}>
                  <h3 className={`text-xl font-bold mb-4 text-center h-10 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{skill.category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                      <span className='text-transparent'>SR</span>
                        {item}
                      <span className='text-transparent'>SR</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className='h-5'></div>
          </div>
          <div className='h-5'></div>
          {/* Career Highlights */}
          <div className={`backdrop-blur-sm rounded-xl p-8 border ${
            isDarkMode 
              ? 'bg-slate-800/30 border-slate-600/30' 
              : 'bg-orange-50 border-slate-200/50'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 text-center ${
              isDarkMode ? 'text-pink-400' : 'text-pink-600'
            }`}>Career Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? 'text-emerald-400' : 'text-blue-600'
                }`}>3+</div>
                <div className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Years Experience</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-400'
                }`}>2</div>
                <div className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Major Companies</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? 'text-pink-400' : 'text-pink-400'
                }`}>10+</div>
                <div className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Technologies Used</div>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${
                  isDarkMode ? 'text-green-400' : 'text-blue-500'
                }`}>Enterprise</div>
                <div className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Level Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-7'></div>
    </div>
  );
};

export default Experience;
