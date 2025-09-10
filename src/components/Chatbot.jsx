import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Suyash Roy's portfolio assistant. I can help you learn more about his background, skills, and experience. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    try {
      // Call the backend API
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const botResponse = {
        id: messages.length + 2,
        text: data.message,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error calling chat API:', error);
      
      // Fallback to local response
      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(currentMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('technology')) {
      return "Suyash Roy is skilled in Python, Java, C#, .NET, React, Node.js, JavaScript, TypeScript, Azure, Cloud Computing, J2EE (Spring, Struts, Hibernate), and Git. He has extensive experience in full-stack development and enterprise software solutions.";
    } else if (message.includes('education') || message.includes('degree')) {
      return "Suyash Roy is currently pursuing a Master of Science in Computer Science at USC (3.43/4.0 GPA) and completed his Bachelor of Technology in Information Technology from KIIT with an excellent 9.19/10.0 GPA.";
    } else if (message.includes('experience') || message.includes('work')) {
      return "Suyash Roy is currently a Software Engineer Intern at Tesla, and has previously worked at Microsoft, Eltropy as a Full Stack Engineer, and Bain Capability Network. He has 3+ years of experience with major tech companies.";
    } else if (message.includes('project')) {
      return "Suyash Roy has worked on various projects including UI screen integration using ReactJS and J2EE frameworks. He specializes in building scalable web applications. You can see more details on the Projects page.";
    } else if (message.includes('contact') || message.includes('email')) {
      return "You can reach Suyash Roy at +1 (213)-348-0785, through his LinkedIn (linkedin.com/in/suyash-roy-8ab1461ba/), GitHub (github.com/SuyashRoy), or through the contact form on this website.";
    } else if (message.includes('hello') || message.includes('hi')) {
      return "Hello! I'm here to help you learn more about Suyash Roy. Feel free to ask about his skills, experience, education, or projects!";
    } else {
      return "That's an interesting question! Based on Suyash Roy's background, I can help you with information about his technical skills, work experience, education at USC, or projects. What specific area would you like to know more about?";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-gray-900/95 backdrop-blur-md border border-gray-600/50 rounded-xl shadow-2xl w-80 h-96 flex flex-col mb-4 transition-all duration-300 ease-in-out">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 rounded-t-xl flex items-center justify-between border-b border-gray-600/30">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SR</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Portfolio Assistant</h3>
                <p className="text-gray-300 text-xs">Ask about Suyash Roy</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                      : 'bg-gray-700/80 text-gray-100 shadow-md'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-600/30 bg-gray-800/30">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Suyash Roy..."
                className="flex-1 px-3 py-2 bg-gray-700/60 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
              >
                <svg className="w-10 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path className="rotate-90" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 -7l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-slate-700 to-slate-800 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-600/30 backdrop-blur-sm hover:from-slate-600 hover:to-slate-700"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
