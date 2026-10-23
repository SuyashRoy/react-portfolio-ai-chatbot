const express = require('express');
const cors = require('cors');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

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

    const resumePath = path.join(__dirname, 'public', 'Suyash_Roy_Resume.pdf');
    
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

// /api/chat and /api/contact live in api/ as Vercel serverless functions.
// Mount the same handlers here so local dev runs exactly what production runs.
const mount = (route, file) =>
  app.all(route, async (req, res) => (await import(`./api/${file}`)).default(req, res));
mount('/api/chat', 'chat.js');
mount('/api/contact', 'contact.js');

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
