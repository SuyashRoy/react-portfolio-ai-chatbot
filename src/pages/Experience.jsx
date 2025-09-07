import React from 'react';
import ParticleBackground from '../components/ParticleBackground';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Increased application performance by 40% through code optimization",
        "Led a team of 3 developers on a major product feature",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Remote",
      period: "2022 - 2023",
      type: "Internship",
      description: "Developed responsive user interfaces and improved user experience for web applications. Worked closely with designers and backend developers to implement new features.",
      achievements: [
        "Built 5+ responsive React components",
        "Improved page load times by 30%",
        "Implemented accessibility features for better UX",
        "Participated in agile development processes"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Figma", "Git"]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2021 - 2022",
      type: "Freelance",
      description: "Provided web development services to small businesses and startups. Created custom websites and web applications tailored to client needs.",
      achievements: [
        "Completed 10+ client projects successfully",
        "Maintained 100% client satisfaction rate",
        "Developed custom e-commerce solutions",
        "Provided ongoing maintenance and support"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress"]
    }
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material-UI", "Redux"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "Firebase", "Figma", "Jest"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-xl text-gray-300">
              My professional journey and expertise
            </p>
          </div>
          
          {/* Experience Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
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
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-pink-400 mb-6 text-center">Career Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">5+</div>
                <div className="text-gray-300">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
