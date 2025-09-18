import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const Education = () => {
  const { isDarkMode } = useTheme();
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Southern California",
      year: "January 2025 - Present",
      gpa: "3.43/4.0",
      description: "Pursuing advanced studies in computer science with focus on software engineering, algorithms, and modern computing technologies.",
      courses: ["Advanced Algorithms", "Software Engineering", "System Design", "Machine Learning", "Database Systems"]
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Kalinga Institute of Industrial Technology (KIIT)",
      year: "2018 - 2022",
      gpa: "9.19/10.0",
      description: "Completed undergraduate studies in Information Technology with specialization in software development, data structures, and enterprise applications.",
      courses: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "Software Engineering", "Web Technologies", "Computer Networks"]
    }
  ];

  const certifications = [
    {
      name: "J2EE Enterprise Development",
      issuer: "Professional Experience",
      date: "2022",
      credential: "BAIN-TMT-001"
    },
    {
      name: "ReactJS Development",
      issuer: "Professional Experience",
      date: "2022",
      credential: "UI-INTEGRATION-002"
    },
    {
      name: "Git Version Control",
      issuer: "DevOps Experience",
      date: "2022",
      credential: "VCS-003"
    }
  ];

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white' 
        : 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 text-gray-900'
    }`}>
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-20 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-600' 
                : 'from-blue-400 to-blue-500'
            } bg-clip-text text-transparent`}>
              Education
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My academic journey and continuous learning
            </p>
          </div>
          
          {/* Education Timeline */}
          <div className="mb-16">
            <h2 className={`text-3xl font-bold mb-8 text-center ${
              isDarkMode ? 'text-blue-400' : 'text-slate-600'
            }`}>Academic Background</h2>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className={`backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-slate-600/30 hover:border-blue-500' 
                    : 'bg-white/80 border-slate-200/50 hover:border-blue-400'
                }`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h3 className={`text-2xl font-bold mb-2 text-center ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{edu.degree}</h3>
                      <h4 className={`text-xl mb-2 text-center ${
                        isDarkMode ? 'text-blue-400' : 'text-slate-600'
                      }`}>{edu.institution}</h4>
                      <p className={`mb-4 text-center ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{edu.description}</p>
                      
                      <div className="mb-4">
                        <h5 className={`text-lg font-semibold mb-2 text-center ${
                          isDarkMode ? 'text-purple-400' : 'text-purple-400'
                        }`}>Key Courses:</h5>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {edu.courses.map((course, courseIndex) => (
                            <span key={courseIndex} className={`px-3 py-1 rounded-full text-sm ${
                              isDarkMode 
                                ? 'bg-gray-700 text-gray-300' 
                                : 'bg-slate-100 text-slate-700'
                            }`}>
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className={`rounded-lg p-4 h-full ${
                        isDarkMode ? 'bg-gray-700/50' : 'bg-slate-100/70'
                      }`}>
                        <div className="text-center">
                          <div className={`text-2xl font-bold mb-2 ${
                            isDarkMode ? 'text-green-400' : 'text-blue-500'
                          }`}>{edu.gpa}</div>
                          <div className={`mb-4 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>GPA</div>
                          <div className={`text-lg font-semibold ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>{edu.year}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="mb-16">
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
          </div>
          
          {/* Learning Philosophy */}
          <div className={`backdrop-blur-sm rounded-xl p-8 border ${
            isDarkMode 
              ? 'bg-slate-800/30 border-slate-600/30' 
              : 'bg-white/60 border-slate-200/50'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 text-center ${
              isDarkMode ? 'text-pink-400' : 'text-pink-400'
            }`}>Learning Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-xl font-semibold mb-4 text-center ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Continuous Learning</h3>
                <p className={`leading-relaxed text-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I believe that technology evolves rapidly, and staying current requires a commitment to 
                  continuous learning. I regularly participate in online courses, attend tech conferences, 
                  and contribute to open-source projects to expand my knowledge.
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
                  solving actual problems, and working with teams. This approach helps me understand 
                  not just how things work, but why they work that way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
