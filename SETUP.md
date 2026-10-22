# 🚀 Setup Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Parse your resume**
   ```bash
   node parse-resume.cjs
   ```

3. **Create environment file**
   Copy the template and fill in your keys (see comments in the file for what each one does):
   ```bash
   cp .env.example .env
   ```

4. **Start the application**
   ```bash
   npm run full:dev
   ```

## Getting Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and add it to your `.env` file

## Access Points

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000
- **Chatbot**: Available on all pages (bottom-right corner)

## Troubleshooting

- If chatbot doesn't work, check browser console for CORS errors
- Ensure backend is running on port 5000
- Check that `resume-data.json` exists after running the parser
