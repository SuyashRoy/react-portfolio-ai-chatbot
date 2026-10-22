const express = require('express');
const cors = require('cors');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const path = require('path');
const https = require('https');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

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

// Chat endpoint for Gemini AI. Uses the same profile data as the website (src/data/profile.json).
const profilePath = path.join(__dirname, 'src', 'data', 'profile.json');
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

app.post('/api/chat', async (req, res) => {
  const { message } = req.body || {};
  if (!message || typeof message !== 'string' || message.length > 1000) {
    return res.status(400).json({ error: 'A message under 1000 characters is required' });
  }

  // Without a key the client answers from its own copy of profile.json
  if (!process.env.GEMINI_API_KEY) {
    return res.status(503).json({ error: 'Chat model not configured' });
  }

  try {
    const profile = JSON.parse(fs.readFileSync(profilePath, 'utf8'));
    const context = `
You are an AI assistant helping visitors learn about Suyash Roy's professional background.
Here is his profile data:

${JSON.stringify(profile, null, 2)}

Answer the visitor's question using only this data. If the question is not related to Suyash's background, politely redirect the conversation back to his professional information.
Keep responses concise but informative (2-3 sentences max).

Visitor's question: """${message}"""
`;
    const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });
    const result = await model.generateContent(context);
    res.json({ message: result.response.text(), source: 'gemini' });
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(503).json({ error: 'Chat model unavailable' });
  }
});

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Function to send message via Telegram using native HTTPS
function sendTelegramMessage(text) {
  return new Promise((resolve) => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not set');
      return resolve(false);
    }
    const payload = JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: text,
      parse_mode: 'HTML'
    });

    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    console.log('Sending Telegram message...');

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          console.log('Telegram API response:', response);
          
          if (response.ok) {
            console.log('Message sent successfully to Telegram');
            resolve(true);
          } else {
            console.error('Telegram API error:', response.description);
            resolve(false);
          }
        } catch (error) {
          console.error('Error parsing Telegram response:', error);
          resolve(false);
        }
      });
    });

    req.on('error', (error) => {
      console.error('Error sending Telegram message:', error);
      resolve(false);
    });

    req.write(payload);
    req.end();
  });
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log('Validation failed: Missing required fields');
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Format message for Telegram
    const telegramMessage = `
🔔 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${esc(name)}
📧 <b>Email:</b> ${esc(email)}
📋 <b>Subject:</b> ${esc(subject)}

💬 <b>Message:</b>
${esc(message)}

⏰ <b>Time:</b> ${new Date().toLocaleString()}
    `.trim();

    // Send message to Telegram
    const success = await sendTelegramMessage(telegramMessage);

    if (success) {
      res.json({
        success: true,
        message: 'Message sent successfully!'
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Failed to send message'
      });
    }
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Test Telegram endpoint
app.get('/api/test-telegram', async (req, res) => {
  try {
    const testMessage = '🔧 <b>Test Message</b>\n\nThis is a test message from your portfolio contact form. If you receive this, the integration is working!';
    const success = await sendTelegramMessage(testMessage);
    
    res.json({
      success: success,
      message: success ? 'Test message sent successfully!' : 'Failed to send test message'
    });
  } catch (error) {
    console.error('Error in test endpoint:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
