# 🚀 AI-Powered Portfolio Website

A modern, responsive portfolio website with AI chatbot integration, meteor shower animations, and dark theme design.

## ✨ Features

- **🌠 Meteor Shower Animation**: Beautiful particle effects using TSParticles
- **🤖 AI Chatbot**: Gemini-powered chatbot that understands your resume
- **📱 Responsive Design**: Mobile-first approach with hamburger navigation
- **🎨 Dark Theme**: Elegant dark color scheme with gradient accents
- **📄 Resume Integration**: Automatic PDF parsing and structured data extraction
- **🔄 Real-time Chat**: Interactive chatbot with typing indicators

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **TSParticles** - Particle animation library
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **PDF-Parse** - PDF text extraction
- **Google Gemini AI** - AI chatbot integration
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd react-portfolio-ai-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=5000
   NODE_ENV=development
   ```

4. **Parse your resume**
   ```bash
   node parse-resume.cjs
   ```

5. **Start the development servers**
   ```bash
   # Start both frontend and backend
   npm run full:dev
   
   # Or start them separately
   npm run dev        # Frontend (Vite)
   npm run server:dev # Backend (Express)
   ```

6. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## 📁 Project Structure

```
react-portfolio-ai-chatbot/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with routing
│   │   ├── Chatbot.jsx         # AI chatbot widget
│   │   └── ParticleBackground.jsx # Meteor animation
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── About.jsx           # About section
│   │   ├── Education.jsx        # Education timeline
│   │   ├── Experience.jsx      # Work experience
│   │   ├── Projects.jsx        # Project showcase
│   │   └── Contact.jsx          # Contact form
│   ├── App.jsx                  # Main app with routing
│   └── main.jsx                 # Entry point
├── server.js                    # Express backend
├── parse-resume.cjs             # Resume parsing script
├── resume-data.json             # Parsed resume data
└── Resume_Fall_25.pdf           # Your resume PDF
```

## 🤖 AI Chatbot Setup

### Getting Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env` file:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

### Chatbot Features

- **Resume-aware**: Understands your professional background
- **Contextual responses**: Answers questions about skills, experience, education
- **Fallback system**: Works even without API key (rule-based responses)
- **Real-time typing**: Shows typing indicators
- **Mobile-friendly**: Responsive chat interface

## 🎨 Customization

### Colors and Theme
Edit `src/index.css` to customize the color scheme:
```css
:root {
  --primary: #3B82F6;
  --secondary: #8B5CF6;
  --accent: #EC4899;
}
```

### Particle Animation
Modify `src/components/ParticleBackground.jsx` to adjust:
- Particle count
- Colors
- Speed
- Interaction effects

### Resume Data
Update `resume-data.json` or modify `parse-resume.cjs` to change:
- Personal information
- Education details
- Work experience
- Skills and technologies
- Projects

## 📱 Pages Overview

### 🏠 Home
- Hero section with animated background
- Quick stats and call-to-action buttons
- Scroll indicator

### 👤 About
- Personal story and values
- Technical skills breakdown
- Interests and hobbies

### 🎓 Education
- Academic timeline
- Certifications
- Learning philosophy

### 💼 Experience
- Work history with achievements
- Technical skills overview
- Career highlights

### 🚀 Projects
- Featured projects showcase
- Filterable project gallery
- Technology tags

### 📞 Contact
- Contact form with validation
- Social media links
- Availability status

## 🔧 Available Scripts

```bash
npm run dev          # Start frontend development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run server       # Start backend server
npm run server:dev   # Start backend with nodemon
npm run full:dev     # Start both frontend and backend
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

### Backend (Railway/Heroku)
1. Set environment variables
2. Deploy the `server.js` file
3. Update frontend API URLs to production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:
1. Check the console for errors
2. Ensure all dependencies are installed
3. Verify environment variables are set
4. Check that the resume PDF exists

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Dark/light theme toggle
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] Performance optimizations
- [ ] SEO improvements

---

**Built with ❤️ by Yugesh Chandra Roy**