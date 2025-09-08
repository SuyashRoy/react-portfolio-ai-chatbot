// import React from 'react';

// const ParticleBackground = () => {
//   return (
//     <div className="absolute inset-0 w-full h-full z-0">
//       {/* Animated background with CSS particles */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-50"></div>
      
//       {/* Animated particles */}
//       <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//       <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-100"></div>
//       <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-200"></div>
//       <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-300"></div>
//       <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
      
//       {/* Additional animated elements */}
//       <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-700"></div>
//       <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
//       <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-pink-300 rounded-full animate-pulse delay-1200"></div>
//       <div className="absolute bottom-1/2 left-1/4 w-2 h-2 bg-green-300 rounded-full animate-pulse delay-1500"></div>
//       <div className="absolute top-1/5 right-1/5 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1800"></div>
//     </div>
//   );
// };

// export default ParticleBackground;

// 
import React from 'react';
import './particles.css'; // Import custom animations

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-50"></div>

      {/* Glowing snowflakes */}
      <div className="snowflake" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
      <div className="snowflake" style={{ top: '25%', right: '30%', animationDelay: '0.4s' }}></div>
      <div className="snowflake" style={{ bottom: '15%', left: '50%', animationDelay: '0.8s' }}></div>
      <div className="snowflake" style={{ top: '40%', right: '10%', animationDelay: '1.2s' }}></div>
      <div className="snowflake" style={{ bottom: '10%', right: '40%', animationDelay: '1.6s' }}></div>

      {/* Additional glowing snowflakes */}
      <div className="snowflake" style={{ top: '60%', left: '70%', animationDelay: '2s' }}></div>
      <div className="snowflake" style={{ bottom: '20%', left: '15%', animationDelay: '2.4s' }}></div>
      <div className="snowflake" style={{ top: '50%', right: '55%', animationDelay: '2.8s' }}></div>
      <div className="snowflake" style={{ bottom: '5%', left: '30%', animationDelay: '3.2s' }}></div>
      <div className="snowflake" style={{ top: '80%', right: '20%', animationDelay: '3.6s' }}></div>
    </div>
  );
};

export default ParticleBackground;
