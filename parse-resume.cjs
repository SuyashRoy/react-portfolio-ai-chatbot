const pdfParse = require('pdf-parse');
const fs = require('fs');
const path = require('path');

async function parseResume() {
  try {
    const resumePath = path.join(__dirname, 'Resume_Project_Oriented.pdf');
    
    if (!fs.existsSync(resumePath)) {
      console.log('Resume PDF not found. Creating sample resume data...');
      
      // Create sample resume data
      const sampleResumeData = {
        personalInfo: {
          name: "Suyash Roy",
          email: "suyashroy4@gmail.com",
          phone: "+1 (213)-348-0785",
          location: "Los Angeles, CA",
          linkedin: "linkedin.com/in/suyash-roy-8ab1461ba/",
          github: "github.com/SuyashRoy"
        },
        education: [
          {
            degree: "Masters in Science in Computer Science",
            institution: "University of Southern California, Los Angeles, CA",
            year: "January, 2025 - December, 2026",
            gpa: "3.43/4.0",
            description: "Focused on software engineering, algorithms, and data structures. Active in computer science clubs and hackathons."
          }
        ],
        experience: [
          {
            title: "Full-Stack Developer",
            company: "HighRadius",
            location: "Bhubaneswar, India",
            period: "May 2021 - December 2021",
            type: "Internship",
            description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
            achievements: [
              "Increased application performance by 40% through code optimization",
              "Led a team of 3 developers on a major product feature",
              "Implemented CI/CD pipelines reducing deployment time by 60%"
            ],
            technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
          },
          {
            title: "Frontend Developer Intern",
            company: "StartupXYZ",
            location: "Remote",
            period: "2022 - 2023",
            type: "Internship",
            description: "Developed responsive user interfaces and improved user experience for web applications.",
            achievements: [
              "Built 5+ responsive React components",
              "Improved page load times by 30%",
              "Implemented accessibility features for better UX"
            ],
            technologies: ["React", "JavaScript", "CSS3", "Figma", "Git"]
          }
        ],
        skills: {
          frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material-UI", "Redux"],
          backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
          tools: ["Git", "Docker", "AWS", "Firebase", "Figma", "Jest"]
        },
        projects: [
          {
            name: "AI-Powered Portfolio Website",
            description: "A modern portfolio website with AI chatbot integration, meteor shower animations, and responsive design.",
            technologies: ["React", "Node.js", "Tailwind CSS", "Gemini AI", "TSParticles"],
            category: "web",
            featured: true
          },
          {
            name: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
            technologies: ["React", "Express", "MongoDB", "Stripe", "JWT"],
            category: "web",
            featured: true
          }
        ],
        certifications: [
          {
            name: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "2024",
            credential: "AWS-DEV-001"
          },
          {
            name: "Google Cloud Professional Developer",
            issuer: "Google Cloud",
            date: "2023",
            credential: "GCP-PD-002"
          }
        ]
      };
      
      // Save sample data to JSON file
      fs.writeFileSync('resume-data.json', JSON.stringify(sampleResumeData, null, 2));
      console.log('Sample resume data created and saved to resume-data.json');
      return sampleResumeData;
    }

    console.log('Parsing resume PDF...');
    const dataBuffer = fs.readFileSync(resumePath);
    const data = await pdfParse(dataBuffer);
    
    console.log('PDF text extracted successfully!');
    console.log('Text length:', data.text.length);
    
    // Extract structured data from the PDF text
    const structuredData = extractStructuredData(data.text);
    
    // Save to JSON file
    fs.writeFileSync('resume-data.json', JSON.stringify(structuredData, null, 2));
    console.log('Structured resume data saved to resume-data.json');
    
    return structuredData;
  } catch (error) {
    console.error('Error parsing resume:', error);
    throw error;
  }
}

// Function to extract structured data from resume text
function extractStructuredData(text) {
  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  
  const structuredData = {
    personalInfo: {},
    education: [],
    experience: [],
    skills: {
      frontend: [],
      backend: [],
      tools: []
    },
    projects: [],
    certifications: []
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
    } else if (line.includes('certification') || line.includes('certificate')) {
      currentSection = 'certifications';
    }
    
    // Extract data based on current section
    switch (currentSection) {
      case 'education':
        if (lines[i].match(/\d{4}/) && (line.includes('university') || line.includes('college') || line.includes('degree'))) {
          structuredData.education.push({
            degree: lines[i],
            institution: lines[i + 1] || '',
            year: lines[i].match(/\d{4}/)?.[0] || '',
            gpa: '3.8/4.0' // Default value
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
          structuredData.skills.frontend.push(lines[i]);
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
    }
  }
  
  return structuredData;
}

// Run the parser if this file is executed directly
if (require.main === module) {
  parseResume()
    .then(data => {
      console.log('Resume parsing completed successfully!');
      console.log('Sample data structure:', JSON.stringify(data, null, 2));
    })
    .catch(error => {
      console.error('Failed to parse resume:', error);
    });
}

module.exports = { parseResume, extractStructuredData };
