import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

// Dynamic import for pdf-parse to avoid ES module issues
let pdfParse;
try {
  const pdfParseModule = await import('pdf-parse');
  pdfParse = pdfParseModule.default;
} catch (error) {
  console.warn('pdf-parse not available, using fallback');
  pdfParse = null;
}

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'demo-key');

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Parse resume PDF endpoint
app.post('/api/parse-resume', async (req, res) => {
  try {
    // Try to load existing parsed data first
    const resumeDataPath = path.join(__dirname, 'resume-data.json');
    if (fs.existsSync(resumeDataPath)) {
      const existingData = JSON.parse(fs.readFileSync(resumeDataPath, 'utf8'));
      return res.json({
        success: true,
        structuredData: existingData,
        source: 'cached'
      });
    }

    const resumePath = path.join(__dirname, 'Resume_Fall_25.pdf');
    
    if (!fs.existsSync(resumePath)) {
      return res.status(404).json({ error: 'Resume PDF not found' });
    }

    const dataBuffer = fs.readFileSync(resumePath);
    const data = await pdfParse(dataBuffer);
    
    // Extract structured data from the PDF text
    const structuredData = extractStructuredData(data.text);
    
    // Save to cache
    fs.writeFileSync(resumeDataPath, JSON.stringify(structuredData, null, 2));
    
    res.json({
      success: true,
      rawText: data.text,
      structuredData: structuredData,
      source: 'parsed'
    });
  } catch (error) {
    console.error('Error parsing resume:', error);
    res.status(500).json({ error: 'Failed to parse resume' });
  }
});

// Function to extract structured data from resume text
function extractStructuredData(text) {
  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  
  const structuredData = {
    personalInfo: {},
    education: [],
    experience: [],
    skills: [],
    projects: [],
    contact: {}
  };

  let currentSection = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].toLowerCase();
    
    // Identify sections
    if (line.includes('education') || line.includes('academic')) {
      currentSection = 'education';
    } else if (line.includes('experience') || line.includes('work') || line.includes('employment')) {
      currentSection = 'experience';
    } else if (line.includes('skills') || line.includes('technical')) {
      currentSection = 'skills';
    } else if (line.includes('projects') || line.includes('portfolio')) {
      currentSection = 'projects';
    } else if (line.includes('contact') || line.includes('email') || line.includes('phone')) {
      currentSection = 'contact';
    }
    
    // Extract data based on current section
    switch (currentSection) {
      case 'education':
        if (lines[i].match(/\d{4}/) && (line.includes('university') || line.includes('college') || line.includes('degree'))) {
          structuredData.education.push({
            institution: lines[i],
            year: lines[i].match(/\d{4}/)?.[0] || '',
            degree: line.includes('bachelor') ? 'Bachelor' : line.includes('master') ? 'Master' : 'Degree'
          });
        }
        break;
        
      case 'experience':
        if (lines[i].match(/\d{4}/) && (line.includes('company') || line.includes('intern') || line.includes('developer'))) {
          structuredData.experience.push({
            company: lines[i],
            position: lines[i + 1] || '',
            duration: lines[i].match(/\d{4}/)?.[0] || ''
          });
        }
        break;
        
      case 'skills':
        if (line.includes('javascript') || line.includes('react') || line.includes('python') || 
            line.includes('java') || line.includes('node') || line.includes('sql') ||
            line.includes('html') || line.includes('css') || line.includes('git')) {
          structuredData.skills.push(lines[i]);
        }
        break;
        
      case 'projects':
        if (line.includes('project') || line.includes('app') || line.includes('website')) {
          structuredData.projects.push({
            name: lines[i],
            description: lines[i + 1] || '',
            technologies: lines[i + 2] || ''
          });
        }
        break;
        
      case 'contact':
        if (line.includes('@') || line.includes('email')) {
          structuredData.contact.email = lines[i];
        } else if (line.includes('phone') || line.match(/\d{3}-\d{3}-\d{4}/)) {
          structuredData.contact.phone = lines[i];
        } else if (line.includes('linkedin') || line.includes('github')) {
          structuredData.contact.linkedin = lines[i];
        }
        break;
    }
  }
  
  return structuredData;
}

// Chat endpoint for Gemini AI
app.post('/api/chat', async (req, res) => {
  try {
    const { message, resumeData } = req.body;
    
    // Load resume data if not provided
    let resumeContext = resumeData;
    if (!resumeContext) {
      const resumeDataPath = path.join(__dirname, 'resume-data.json');
      if (fs.existsSync(resumeDataPath)) {
        resumeContext = JSON.parse(fs.readFileSync(resumeDataPath, 'utf8'));
      }
    }
    
    // Create context for Gemini
    const context = `
You are an AI assistant helping visitors learn about Yugesh Chandra Roy's professional background. 
Here is the resume data:

${JSON.stringify(resumeContext, null, 2)}

Please answer the user's question: "${message}"

Provide helpful, accurate information based on the resume data. If the question is not related to Yugesh's background, politely redirect the conversation back to his professional information.
Keep responses concise but informative (2-3 sentences max).
`;

    try {
      // Use Gemini AI if API key is available
      if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'demo-key') {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(context);
        const response = await result.response;
        const text = response.text();
        
        res.json({
          message: text,
          source: 'gemini'
        });
      } else {
        // Fallback to rule-based responses
        const fallbackResponse = generateFallbackResponse(message, resumeContext);
        res.json({
          message: fallbackResponse,
          source: 'fallback'
        });
      }
    } catch (geminiError) {
      console.error('Gemini API error:', geminiError);
      // Fallback to rule-based responses
      const fallbackResponse = generateFallbackResponse(message, resumeContext);
      res.json({
        message: fallbackResponse,
        source: 'fallback'
      });
    }
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Failed to process chat message' });
  }
});

// Fallback response generator
function generateFallbackResponse(message, resumeData) {
  const msg = message.toLowerCase();
  
  if (msg.includes('skill') || msg.includes('technology')) {
    return "Yugesh is skilled in Python, Java, SQL, HTML, CSS, JavaScript, ReactJS, and has experience with J2EE frameworks like Spring, Struts, and Hibernate. He also uses Git for version control.";
  } else if (msg.includes('education') || msg.includes('degree')) {
    return "Yugesh is currently pursuing a Master of Science in Computer Science at the University of Southern California, starting January 2025. He has a strong academic background in computer science.";
  } else if (msg.includes('experience') || msg.includes('work')) {
    return "Yugesh worked as an Analyst Intern in TMT (Tech Media Telecommunications) at Bain Capability Network in Gurgaon, India from January 2022 to June 2022. He has hands-on experience with enterprise software development.";
  } else if (msg.includes('project')) {
    return "Yugesh has worked on various projects including UI Screen Integration for CFO applications using J2EE technologies and ReactJS. He has experience in full-stack development and enterprise software solutions.";
  } else if (msg.includes('contact') || msg.includes('email')) {
    return "You can reach out to Yugesh through the contact form on this website or connect with him on LinkedIn. He's available for opportunities and collaborations.";
  } else if (msg.includes('hello') || msg.includes('hi')) {
    return "Hello! I'm here to help you learn more about Yugesh's professional background. Feel free to ask about his skills, experience, education, or projects!";
  } else {
    return "That's an interesting question! I can help you with information about Yugesh's technical skills, work experience, education background, or projects. What specific area would you like to know more about?";
  }
}

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
