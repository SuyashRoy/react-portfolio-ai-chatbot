import React from 'react';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300">
              Get to know the person behind the code
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold">
                YC
              </div>
            </div>
            
            {/* About Text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-400 mb-6">My Story</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with a deep love for creating innovative solutions. 
                My journey in technology started with curiosity and has evolved into a career focused on 
                building meaningful applications that make a difference.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in AI technology, contributing 
                to open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying ahead of the curve in this ever-evolving field.
              </p>
            </div>
          </div>
          
          {/* Skills & Interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Technical Skills */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Frontend</h4>
                  <p className="text-gray-300">React, Next.js, TypeScript, Tailwind CSS, Material-UI</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Backend</h4>
                  <p className="text-gray-300">Node.js, Express, Python, PostgreSQL, MongoDB</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Tools & Others</h4>
                  <p className="text-gray-300">Git, Docker, AWS, Firebase, Figma</p>
                </div>
              </div>
            </div>
            
            {/* Interests */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">Interests & Hobbies</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Artificial Intelligence & Machine Learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Open Source Contributions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Tech Blogging & Mentoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Photography & Digital Art</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Gaming & Game Development</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8">My Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold text-blue-400 mb-2">Innovation</h4>
                <p className="text-gray-300">Always pushing boundaries and exploring new technologies</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-semibold text-purple-400 mb-2">Collaboration</h4>
                <p className="text-gray-300">Believing in the power of teamwork and shared knowledge</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-xl font-semibold text-pink-400 mb-2">Learning</h4>
                <p className="text-gray-300">Continuous growth and staying curious about the world</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
