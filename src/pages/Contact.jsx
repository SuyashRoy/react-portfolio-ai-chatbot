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
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Failed to send email:', result.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
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
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      title: "GitHub",
      value: "View my repositories",
      link: "https://github.com/SuyashRoy",
      description: "Check out my code"
    }
  ];


  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950' 
        : 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50'
    }`}>
      <ParticleBackground />
      
      <div className="relative z-10 mx-auto px-4 py-20 pt-24">
        <div className="">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-6 h-20">
            </div>
            <h1 className={`h-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-emerald-400 via-teal-500 to-green-600' 
                : 'from-blue-400 to-blue-500'
            } bg-clip-text text-transparent px-4`}>
              Let's Work Together
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">
            {/* Contact Form */}
            <div className="lg:col-start-2 lg:col-span-3">
              {/* Send a Message Card */}
              <div className={`${
                isDarkMode 
                  ? 'bg-slate-800/60 border-slate-700/50' 
                  : 'bg-white/90 border-slate-200/50'
              } backdrop-blur-sm rounded-2xl p-8 md:p-10 border shadow-2xl`}>
                <div className="mb-8">
                  <h2 className={`text-2xl md:text-3xl font-bold mb-3 h-10 text-center ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Send a Message
                  </h2>
                  
                  {/* Horizontal line */}
                  <div className={`border-t mb-4 h-2 ${
                    isDarkMode ? 'border-gray-600' : 'border-gray-300'
                  }`}></div>
                  
                  <p className={`text-base h-10 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  <span className='text-transparent text-sm'>S</span>
                    Let's discuss your project!
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
                            : 'bg-white border-slate-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
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
                            : 'bg-white border-slate-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500 focus:bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className='h-4'></div>
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
                  <div className='h-4'></div>
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
                    className={`w-full py-4 px-8 rounded-xl font-semibold text-lg ${
                      isSubmitting
                        ? 'bg-gray-500 cursor-not-allowed text-gray-300'
                        : `bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 hover:from-emerald-700 hover:via-teal-700 hover:to-green-700 text-white shadow-lg ${
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
                  
                  {submitStatus === 'error' && (
                    <div className={`p-4 rounded-xl border ${
                      isDarkMode 
                        ? 'bg-red-500/10 border-red-500/30 text-red-400' 
                        : 'bg-red-50 border-red-200 text-red-700'
                    }`}>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="font-medium">Failed to send message. Please try again or contact me directly.</span>
                      </div>
                    </div>
                  )}
                </form>
              </div>

            </div>
            
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-2">
              <div className={`${
                isDarkMode 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-white/90 border-slate-200/50'
              } backdrop-blur-sm rounded-2xl p-4 md:p-6 border shadow-xl`}>
                <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Contact Information
                </h3>
                <div className='h-2'></div>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                        isDarkMode 
                          ? 'hover:bg-slate-700/50 text-gray-300 hover:text-white' 
                          : 'hover:bg-slate-50 text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      <div className={`flex-shrink-0 p-2 rounded-lg ${
                        isDarkMode 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-emerald-100 text-emerald-600'
                      }`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0 h-23.5">
                        <h4 className="font-semibold text-sm uppercase tracking-wide opacity-60">
                          <span className='text-transparent'>S</span>
                          {info.title}
                        </h4>
                        <p className="font-medium text-lg group-hover:text-emerald-500 transition-colors">
                        <span className='text-transparent'>S</span>
                          {info.value}
                        </p>
                        <p className="text-sm opacity-75">
                        <span className='text-transparent'>S</span>
                          {info.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='h-10'></div>
          {/* Quick Stats Section */}
          <div className={`rounded-2xl p-8 border backdrop-blur-sm ${ 
            isDarkMode 
              ? 'bg-slate-800/40 border-slate-700/50' 
              : 'bg-white/80 border-slate-200/50'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Connect
            </h3>
            <div className='h-3'></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-emerald-400' : 'text-blue-600'
                }`}>48h</div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Response Time</div>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-500'
                }`}>10+</div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Cases Delivered</div>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-400'
                }`}>3+</div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-pink-400' : 'text-pink-400'
                }`}>Global</div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Remote Ready</div>
              </div>
            </div>
            
            <div className={`mt-8 p-4 rounded-xl text-center ${
              isDarkMode 
                ? 'bg-emerald-500/10 border border-emerald-500/20' 
                : 'bg-blue-50 border border-blue-200'
            }`}>
              {/* <p className={`${
                isDarkMode ? 'text-emerald-400' : 'text-blue-700'
              }`}>
                <span className="font-semibold">💡 Pro Tip:</span> Include your project timeline and budget range for a faster, more personalized response!
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className='h-5'></div>
    </div>
  );
};

export default Contact;