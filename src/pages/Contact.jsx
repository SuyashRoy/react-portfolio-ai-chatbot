import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "suyashroy4@gmail.com",
      link: "mailto:suyashroy4@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+1 (213) 348-0785",
      link: "tel:+12133480785",
      description: "Available during business hours"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Los Angeles, CA",
      link: "https://maps.google.com/?q=Los+Angeles,CA",
      description: "Pacific Time Zone"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/suyash-roy-8ab1461ba/",
      description: "Professional networking"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      url: "https://github.com/SuyashRoy",
      color: isDarkMode ? "hover:text-gray-300" : "hover:text-gray-700"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: "https://linkedin.com/in/suyash-roy-8ab1461ba/",
      color: isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"
    },
    {
      name: "Email",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: "mailto:suyashroy4@gmail.com",
      color: isDarkMode ? "hover:text-emerald-400" : "hover:text-emerald-600"
    }
  ];

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'
    }`}>
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-20 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-600' 
                : 'from-emerald-600 via-teal-600 to-green-700'
            } bg-clip-text text-transparent`}>
              Get In Touch
            </h1>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's build something extraordinary together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="xl:col-span-2">
              <div className={`${
                isDarkMode 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/70 border-amber-200/50'
              } backdrop-blur-sm rounded-2xl p-8 md:p-12 border shadow-xl`}>
                <div className="mb-8">
                  <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Send a Message
                  </h2>
                  <p className={`text-lg ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-semibold mb-3 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:bg-slate-700/70' 
                            : 'bg-white/50 border-amber-200 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:bg-white/80'
                        } focus:outline-none focus:ring-0`}
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={`block text-sm font-semibold mb-3 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:bg-slate-700/70' 
                            : 'bg-white/50 border-amber-200 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:bg-white/80'
                        } focus:outline-none focus:ring-0`}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className={`block text-sm font-semibold mb-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:bg-slate-700/70' 
                          : 'bg-white/50 border-amber-200 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:bg-white/80'
                      } focus:outline-none focus:ring-0`}
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className={`block text-sm font-semibold mb-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 resize-none ${
                        isDarkMode 
                          ? 'bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-emerald-400 focus:bg-slate-700/70' 
                          : 'bg-white/50 border-amber-200 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:bg-white/80'
                      } focus:outline-none focus:ring-0`}
                      placeholder="Tell me about your project, idea, or just say hello!"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                      isSubmitting
                        ? 'bg-gray-500 cursor-not-allowed text-gray-300'
                        : `bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:via-teal-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl ${
                            isDarkMode ? 'shadow-emerald-500/25' : 'shadow-emerald-600/25'
                          }`
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className={`p-4 rounded-xl border ${
                      isDarkMode 
                        ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                        : 'bg-green-50 border-green-200 text-green-700'
                    }`}>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
            
            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className={`${
                isDarkMode 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/70 border-amber-200/50'
              } backdrop-blur-sm rounded-2xl p-6 border shadow-xl`}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                        isDarkMode 
                          ? 'hover:bg-slate-700/50 text-gray-300 hover:text-white' 
                          : 'hover:bg-amber-50 text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      <div className={`flex-shrink-0 p-2 rounded-lg ${
                        isDarkMode 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-emerald-100 text-emerald-600'
                      }`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm uppercase tracking-wide opacity-60">
                          {info.title}
                        </h4>
                        <p className="font-medium text-lg group-hover:text-emerald-500 transition-colors">
                          {info.value}
                        </p>
                        <p className="text-sm opacity-75">
                          {info.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Social Links */}
              <div className={`${
                isDarkMode 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/70 border-amber-200/50'
              } backdrop-blur-sm rounded-2xl p-6 border shadow-xl`}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Connect with Me
                </h3>
                
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                        isDarkMode 
                          ? 'hover:bg-slate-700/50 text-gray-300' 
                          : 'hover:bg-amber-50 text-gray-700'
                      } ${social.color}`}
                    >
                      <div className="flex-shrink-0">
                        {social.icon}
                      </div>
                      <span className="font-medium">{social.name}</span>
                      <svg className="w-4 h-4 ml-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Availability Status */}
              <div className={`${
                isDarkMode 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/70 border-amber-200/50'
              } backdrop-blur-sm rounded-2xl p-6 border shadow-xl`}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Availability
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Available for new projects
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Open to collaborations
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Interested in full-time roles
                    </span>
                  </div>
                </div>
                
                <div className={`mt-6 p-4 rounded-xl ${
                  isDarkMode 
                    ? 'bg-slate-700/50 text-gray-300' 
                    : 'bg-amber-50 text-gray-700'
                }`}>
                  <p className="text-sm">
                    <span className="font-semibold">Response Time:</span> Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;