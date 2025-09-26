# 🚀 AI-Powered Portfolio Website

A modern, responsive portfolio website featuring AI chatbot integration, elegant animations, dark/light theme support, and seamless navigation. Built with React and powered by Google Gemini AI.

![Portfolio Preview](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![AI Powered](https://img.shields.io/badge/AI-Gemini--Powered-green?style=for-the-badge&logo=google)
![Responsive](https://img.shields.io/badge/Design-Responsive-purple?style=for-the-badge&logo=css3)

## ✨ Key Features

### 🎨 **Modern Design & UX**
- **🌠 Particle Background**: Beautiful TSParticles meteor shower animation
- **🎯 Smooth Navigation**: Seamless scrolling with scroll indicators across all tabs
- **📱 Fully Responsive**: Mobile-first design with elegant layouts for all screen sizes
- **🌓 Theme Support**: Dynamic dark/light mode with consistent styling
- **💫 Interactive Elements**: Hover effects, animations, and visual feedback

### 🤖 **AI Integration**
- **Gemini-Powered Chatbot**: Intelligent conversational AI that understands your professional background
- **Resume-Aware Responses**: AI trained on your resume data for contextual answers
- **Fallback System**: Graceful degradation with rule-based responses when API is unavailable
- **Real-time Chat**: Live typing indicators and instant responses

### 📊 **Portfolio Sections**
- **🏠 Home**: Hero section with stats, call-to-actions, and smooth scroll navigation
- **👤 About**: Personal story, technical skills, professional interests, and values
- **🎓 Education**: Academic timeline with detailed course information and learning philosophy
- **💼 Experience**: Professional journey with company details, achievements, and technology stacks
- **🚀 Projects**: Featured project showcase with timeline view and technology tags
- **📞 Contact**: Interactive contact form with social media integration

### 🔧 **Technical Excellence**
- **📄 Resume Integration**: Automatic PDF parsing and structured data extraction
- **🔄 Scroll Management**: Precise scroll-to-top navigation and smooth section transitions
- **⚡ Performance Optimized**: Fast loading with Vite build system
- **🛡️ Error Handling**: Robust error boundaries and graceful failure modes

## 🛠️ Tech Stack

### **Frontend Technologies**
- **React 19** - Latest React with modern hooks and concurrent features
- **React Router v6** - Client-side routing with nested routes
- **Tailwind CSS** - Utility-first CSS framework with custom configurations
- **TSParticles** - Advanced particle animation library
- **Vite** - Next-generation frontend build tool
- **ESLint** - Code quality and consistency

### **Backend Technologies**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Minimal web application framework
- **PDF-Parse** - PDF text extraction and processing
- **Google Gemini AI** - Advanced AI language model integration
- **CORS** - Cross-origin resource sharing middleware
- **Helmet** - Security middleware for Express

### **Development Tools**
- **Hot Module Replacement** - Fast development experience
- **Concurrent Scripts** - Run frontend and backend simultaneously
- **Environment Configuration** - Secure API key management
- **Responsive Development** - Mobile-first approach

## 🚀 Quick Start Guide

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager
- Google Gemini API key (optional for AI features)

### **Installation Steps**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SuyashRoy/react-portfolio-ai-chatbot.git
   cd react-portfolio-ai-chatbot
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=5000
   NODE_ENV=development
   ```

4. **Resume Setup**
   - Place your resume PDF as `Resume_Project_Oriented.pdf` in the root directory
   - Parse your resume to extract structured data:
   ```bash
   node parse-resume.cjs
   ```

5. **Development Server**
   ```bash
   # Start both frontend and backend concurrently
   npm run full:dev
   
   # Or start them separately
   npm run dev        # Frontend only (Vite dev server)
   npm run server:dev # Backend only (Express with nodemon)
   ```

6. **Access Application**
   - **Frontend**: http://localhost:5173
   - **Backend API**: http://localhost:5000
   - **Chatbot**: Available on all pages via floating chat widget

## 📁 Project Architecture

```
react-portfolio-ai-chatbot/
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 🧭 Navbar.jsx              # Navigation with responsive menu
│   │   ├── 🤖 Chatbot.jsx             # AI chatbot widget
│   │   ├── 🌟 ParticleBackground.jsx  # Animated background
│   │   └── 🎨 ThemeContext.jsx        # Theme management
│   ├── 📂 pages/
│   │   ├── 🏠 Home.jsx                # Landing page with hero section
│   │   ├── 👤 About.jsx               # Personal information & skills
│   │   ├── 🎓 Education.jsx           # Academic background
│   │   ├── 💼 Experience.jsx          # Professional experience
│   │   ├── 🚀 Projects.jsx            # Project showcase
│   │   └── 📞 Contact.jsx             # Contact form & information
│   ├── 📂 contexts/
│   │   └── 🌓 ThemeContext.jsx        # Global theme state management
│   ├── ⚛️ App.jsx                     # Main application with routing
│   ├── 🎯 main.jsx                    # Application entry point
│   └── 🎨 index.css                   # Global styles & Tailwind
├── 🖥️ server.js                       # Express backend server
├── 📄 parse-resume.cjs                # Resume PDF parsing utility
├── 📊 resume-data.json                # Structured resume data
├── 📋 Resume_Project_Oriented.pdf     # Resume file for download & AI training
├── ⚙️ vite.config.js                  # Vite configuration
├── 🎯 tailwind.config.js              # Tailwind CSS configuration
└── 📦 package.json                    # Dependencies & scripts
```

## 🤖 AI Chatbot Configuration

### **Gemini API Setup**

1. **Get API Key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new project and generate an API key
   - Copy the key for environment configuration

2. **Configure Environment**
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Chatbot Capabilities**
   - ✅ **Resume-Aware**: Understands your professional background
   - ✅ **Contextual**: Answers questions about skills, experience, education
   - ✅ **Intelligent**: Provides detailed, relevant responses
   - ✅ **Fallback Ready**: Works with rule-based responses if API fails
   - ✅ **Real-time**: Live typing indicators and instant responses

### **Chat Features**
- **Professional Context**: AI understands your career journey
- **Technical Questions**: Discusses skills, technologies, and projects
- **Educational Background**: Provides details about academic achievements
- **Career Guidance**: Offers insights about professional experience
- **Interactive UI**: Modern chat interface with smooth animations

## 🎨 Customization Guide

### **Theme Customization**
Modify theme colors in `src/contexts/ThemeContext.jsx`:
```javascript
const themes = {
  dark: {
    primary: 'from-slate-900 via-slate-800 to-slate-950',
    accent: 'from-emerald-400 via-teal-500 to-green-500'
  },
  light: {
    primary: 'from-yellow-50 via-amber-50 to-orange-50',
    accent: 'from-blue-400 to-blue-500'
  }
}
```

### **Particle Effects**
Customize animations in `src/components/ParticleBackground.jsx`:
```javascript
const particleConfig = {
  particles: {
    number: { value: 100 },    // Particle count
    color: { value: "#64ffda" }, // Particle color
    move: { speed: 2 }         // Animation speed
  }
}
```

### **Content Updates**
- **Personal Info**: Update content in respective page components
- **Resume Data**: Modify `resume-data.json` or re-run `parse-resume.cjs`
- **Projects**: Edit project data in `src/pages/Projects.jsx`
- **Skills**: Update skills sections in `src/pages/About.jsx` and `src/pages/Experience.jsx`

## 📱 Page Breakdown

### 🏠 **Home Page**
- **Hero Section**: Animated introduction with gradient text
- **Quick Stats**: Key metrics (GPA, experience, status)
- **Navigation**: Smooth scroll indicators and call-to-action buttons
- **Resume Download**: Direct download link to project-oriented resume

### 👤 **About Page**
- **Personal Story**: Professional journey and motivation
- **Technical Skills**: Frontend, backend, data science, and tools
- **Professional Interests**: Career focus areas with visual indicators
- **Core Values**: Innovation, collaboration, and continuous learning

### 🎓 **Education Page**
- **Academic Timeline**: Detailed education history with institutions
- **Course Information**: Key courses and specializations
- **GPA Display**: Academic performance metrics
- **Learning Philosophy**: Approach to continuous education

### 💼 **Experience Page**
- **Professional Timeline**: Work experience with company details
- **Role Descriptions**: Detailed job responsibilities and achievements
- **Technology Stacks**: Tools and technologies used in each role
- **Career Highlights**: Key metrics and accomplishments

### 🚀 **Projects Page**
- **Featured Projects**: Showcase of key development projects
- **Timeline View**: Visual project timeline with alternating layout
- **Technology Tags**: Skills and tools used in each project
- **Live Demos**: Links to GitHub repositories and live deployments

### 📞 **Contact Page**
- **Contact Form**: Functional form with validation
- **Social Media**: Links to professional profiles
- **Availability**: Current status and preferred contact methods

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start frontend development server (Vite)
npm run server:dev   # Start backend with auto-reload (nodemon)
npm run full:dev     # Start both frontend and backend concurrently

# Production
npm run build        # Build optimized production bundle
npm run preview      # Preview production build locally
npm run server       # Start production backend server

# Utilities
npm run lint         # Run ESLint for code quality
npm run lint:fix     # Auto-fix linting issues
node parse-resume.cjs # Parse resume PDF to JSON

# Testing & Quality
npm run type-check   # TypeScript type checking (if applicable)
npm run format       # Code formatting with Prettier
```

## 🌐 Deployment Guide

### **Frontend Deployment (Vercel/Netlify)**

1. **Build Production Bundle**
   ```bash
   npm run build
   ```

2. **Deploy Configuration**
   ```yaml
   # vercel.json
   {
     "builds": [{ "src": "dist/**", "use": "@vercel/static" }],
     "routes": [{ "src": "/(.*)", "dest": "/index.html" }]
   }
   ```

3. **Environment Variables**
   Set `VITE_API_URL` to your backend URL

### **Backend Deployment (Railway/Heroku/DigitalOcean)**

1. **Environment Setup**
   ```env
   NODE_ENV=production
   PORT=5000
   GEMINI_API_KEY=your_production_api_key
   ```

2. **Start Command**
   ```json
   {
     "scripts": {
       "start": "node server.js"
     }
   }
   ```

### **Full Stack Deployment**
- **Option 1**: Separate deployments (recommended for scalability)
- **Option 2**: Single server deployment with static file serving
- **Option 3**: Containerized deployment with Docker

## 🔒 Security & Performance

### **Security Features**
- ✅ **CORS Configuration**: Proper cross-origin request handling
- ✅ **Helmet.js**: Security headers for Express
- ✅ **Environment Variables**: Secure API key management
- ✅ **Input Validation**: Form validation and sanitization
- ✅ **Error Boundaries**: Graceful error handling in React

### **Performance Optimizations**
- ✅ **Vite Build System**: Fast bundling and tree-shaking
- ✅ **Lazy Loading**: Code splitting for optimal loading
- ✅ **Image Optimization**: Optimized assets and responsive images
- ✅ **Caching Strategy**: Efficient browser and CDN caching
- ✅ **Bundle Analysis**: Optimized chunk sizes

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the Repository**
2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make Changes**
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed
4. **Test Thoroughly**
   - Test on multiple screen sizes
   - Verify AI chatbot functionality
   - Check all navigation flows
5. **Submit Pull Request**
   - Clear description of changes
   - Reference any related issues

## 🐛 Troubleshooting

### **Common Issues**

**❓ Chatbot not responding**
```bash
# Check API key configuration
echo $GEMINI_API_KEY
# Verify backend is running
curl http://localhost:5000/health
```

**❓ Particles not showing**
```bash
# Clear browser cache
# Check console for JavaScript errors
# Verify TSParticles installation
```

**❓ Resume download not working**
```bash
# Ensure Resume_Project_Oriented.pdf exists in public folder
# Check server static file configuration
```

**❓ Build failures**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📊 Browser Support

- ✅ **Chrome 90+**
- ✅ **Firefox 88+**
- ✅ **Safari 14+**
- ✅ **Edge 90+**
- ✅ **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🆘 Support & Community

- 📧 **Email**: [your-email@domain.com]
- 💼 **LinkedIn**: [Your LinkedIn Profile]
- 🐙 **GitHub**: [Your GitHub Profile]
- 🐦 **Twitter**: [Your Twitter Handle]

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🎯 Future Roadmap

### **Planned Features**
- [ ] **Blog Section**: Technical articles and tutorials
- [ ] **Theme Customizer**: Live theme editing interface
- [ ] **Multi-language Support**: Internationalization (i18n)
- [ ] **Advanced Analytics**: Visitor tracking and insights
- [ ] **PWA Support**: Progressive web app capabilities
- [ ] **Voice Commands**: Voice interaction with chatbot
- [ ] **Real-time Notifications**: Live updates and alerts

### **Technical Improvements**
- [ ] **Performance Monitoring**: Real-time performance metrics
- [ ] **A/B Testing**: Feature flag system
- [ ] **SEO Optimization**: Enhanced search engine visibility
- [ ] **Accessibility**: WCAG 2.1 AA compliance
- [ ] **Testing Suite**: Comprehensive unit and integration tests
- [ ] **CI/CD Pipeline**: Automated testing and deployment

---

## 💝 Acknowledgments

- **Google Gemini AI** for powerful AI capabilities
- **React Team** for the amazing framework
- **Tailwind CSS** for utility-first styling
- **TSParticles** for beautiful animations
- **Vite** for lightning-fast development experience

---

**🌟 Built with passion by [Suyash Roy](https://github.com/SuyashRoy) 🌟**

*"Combining modern web technologies with AI to create exceptional user experiences"*

---

[![GitHub stars](https://img.shields.io/github/stars/SuyashRoy/react-portfolio-ai-chatbot?style=social)](https://github.com/SuyashRoy/react-portfolio-ai-chatbot)
[![GitHub forks](https://img.shields.io/github/forks/SuyashRoy/react-portfolio-ai-chatbot?style=social)](https://github.com/SuyashRoy/react-portfolio-ai-chatbot)
[![GitHub watchers](https://img.shields.io/github/watchers/SuyashRoy/react-portfolio-ai-chatbot?style=social)](https://github.com/SuyashRoy/react-portfolio-ai-chatbot)