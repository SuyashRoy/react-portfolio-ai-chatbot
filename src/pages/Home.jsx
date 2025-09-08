import React from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-950 via-slate-700 to-black text-white overflow-hidden">
      <ParticleBackground />
      {/* <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold">
      SR
      </div> */}
      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-rose-500 to-rose-700 bg-clip-text text-transparent">
              Hi, I'm Suyash
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Full-Stack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto h-16">
              Passionate about creating innovative solutions with modern technologies. 
              I build scalable web applications and explore the fascinating world of AI.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center my-8 h-16">
            <Link 
              to="/projects" 
              className="px-16 py-6 mx-14 my-12 w-40 border-2 border-white text-white text-center rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="px-16 py-6 mx-4 my-2 w-40 border-2 border-white text-white text-center rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">15+</div>
              <div className="text-gray-400">Cases Handled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">10+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
