import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const Experience = () => {
  const { isDarkMode } = useTheme();
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Tesla",
      location: "California, USA",
      period: "2024 - Present",
      type: "Internship",
      description: "Working on cutting-edge automotive software solutions and contributing to Tesla's mission of accelerating the world's transition to sustainable energy.",
      achievements: [
        "Developed software solutions for automotive applications",
        "Collaborated with cross-functional teams on high-impact projects",
        "Gained experience with scalable software architecture",
        "Contributed to Tesla's innovative technology stack"
      ],
      technologies: ["Python", "Java", "React", "Software Engineering", "Automotive Systems"]
    },
    {
      title: "Software Engineer Intern",
      company: "Microsoft",
      location: "USA",
      period: "2023 - 2024",
      type: "Internship",
      description: "Worked on several high-profile projects and gained experience with a wide range of Microsoft technologies and enterprise-level software development.",
      achievements: [
        "Contributed to multiple high-profile software projects",
        "Gained experience with Microsoft's technology ecosystem",
        "Collaborated with global development teams",
        "Enhanced skills in enterprise software development"
      ],
      technologies: ["C#", ".NET", "Azure", "JavaScript", "Python", "Cloud Computing"]
    },
    {
      title: "Full Stack Engineer",
      company: "Eltropy",
      location: "USA",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Developed cutting-edge software solutions as a full stack engineer, working on both frontend and backend technologies to deliver comprehensive applications.",
      achievements: [
        "Built end-to-end software solutions",
        "Implemented both frontend and backend components",
        "Delivered high-quality software products",
        "Collaborated with product and design teams"
      ],
      technologies: ["React", "Node.js", "JavaScript", "Python", "Full Stack Development"]
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
      items: ["React", "ReactJS", "JavaScript", "HTML", "CSS", "TypeScript"]
    },
    {
      category: "Backend & Frameworks",
      items: ["Python", "Java", "C#", ".NET", "Node.js", "J2EE", "Spring", "Struts", "Hibernate", "SQL"]
    },
    {
      category: "Tools & Cloud",
      items: ["Git", "Azure", "Cloud Computing", "Software Engineering", "Full Stack Development"]
    }
  ];

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white' 
        : 'bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 text-gray-900'
    }`}>
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-20 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-600' 
                : 'from-emerald-600 via-teal-600 to-green-700'
            } bg-clip-text text-transparent`}>
              Experience
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My professional journey and expertise
            </p>
          </div>
          
          {/* Experience Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30 hover:border-blue-500 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                          <h4 className="text-xl text-blue-400 mb-1">{exp.company}</h4>
                          <p className="text-gray-300">{exp.location}</p>
                        </div>
                        <div className="text-right mt-4 md:mt-0">
                          <div className="text-lg font-semibold text-white">{exp.period}</div>
                          <div className="text-purple-400">{exp.type}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-purple-400 mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-gray-700/50 rounded-lg p-4 h-full">
                        <h5 className="text-lg font-semibold text-white mb-3">Technologies</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-purple-400 mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Career Highlights */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30">
            <h2 className="text-3xl font-bold text-pink-400 mb-6 text-center">Career Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">4</div>
                <div className="text-gray-300">Major Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">15+</div>
                <div className="text-gray-300">Technologies Used</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">Enterprise</div>
                <div className="text-gray-300">Level Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
