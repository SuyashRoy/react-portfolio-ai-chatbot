import React from 'react';
import ParticleBackground from '../components/ParticleBackground';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      year: "2021 - 2025",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, algorithms, and data structures. Active in computer science clubs and hackathons.",
      courses: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Machine Learning", "Web Development"]
    },
    {
      degree: "High School Diploma",
      institution: "High School Name",
      year: "2017 - 2021",
      gpa: "3.9/4.0",
      description: "Graduated with honors, participated in robotics club and science fairs.",
      courses: ["Advanced Mathematics", "Physics", "Chemistry", "Computer Science"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2024",
      credential: "AWS-DEV-001"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credential: "GCP-PD-002"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credential: "META-REACT-003"
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
              Education
            </h1>
            <p className="text-xl text-gray-300">
              My academic journey and continuous learning
            </p>
          </div>
          
          {/* Education Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Academic Background</h2>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <h4 className="text-xl text-blue-400 mb-2">{edu.institution}</h4>
                      <p className="text-gray-300 mb-4">{edu.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-lg font-semibold text-purple-400 mb-2">Key Courses:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <span key={courseIndex} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="bg-gray-700/50 rounded-lg p-4 h-full">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400 mb-2">{edu.gpa}</div>
                          <div className="text-gray-300 mb-4">GPA</div>
                          <div className="text-lg font-semibold text-white">{edu.year}</div>
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
            <h2 className="text-3xl font-bold text-purple-400 mb-8 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl mb-4">🏆</div>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-blue-400 mb-2">{cert.issuer}</p>
                    <p className="text-gray-300 mb-2">{cert.date}</p>
                    <p className="text-sm text-gray-400">ID: {cert.credential}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Learning Philosophy */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-pink-400 mb-6 text-center">Learning Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Continuous Learning</h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe that technology evolves rapidly, and staying current requires a commitment to 
                  continuous learning. I regularly participate in online courses, attend tech conferences, 
                  and contribute to open-source projects to expand my knowledge.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Hands-On Experience</h3>
                <p className="text-gray-300 leading-relaxed">
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
