// POST /api/chat: answers questions about Suyash with Gemini, grounded in profile.json.
// Runs as a Vercel serverless function; server.cjs mounts the same handler for local dev.
import { GoogleGenerativeAI } from '@google/generative-ai';
import { readFileSync } from 'node:fs';

// vercel.json includeFiles ships profile.json with this function
const profile = JSON.parse(readFileSync(new URL('../src/data/profile.json', import.meta.url), 'utf8'));

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body || {};
  if (!message || typeof message !== 'string' || message.length > 1000) {
    return res.status(400).json({ error: 'A message under 1000 characters is required' });
  }

  // Without a key the client answers from its own copy of profile.json
  if (!process.env.GEMINI_API_KEY) {
    return res.status(503).json({ error: 'Chat model not configured' });
  }

  try {
    const context = `
You are an AI assistant helping visitors learn about Suyash Roy's professional background.
Here is his profile data:

${JSON.stringify(profile, null, 2)}

Answer the visitor's question using only this data. If the question is not related to Suyash's background, politely redirect the conversation back to his professional information.
Keep responses concise but informative (2-3 sentences max).

Visitor's question: """${message}"""
`;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || 'gemini-3.8-flash' });
    const result = await model.generateContent(context);
    return res.status(200).json({ message: result.response.text(), source: 'gemini' });
  } catch (error) {
    console.error('Gemini API error:', error);
    return res.status(503).json({ error: 'Chat model unavailable' });
  }
}
