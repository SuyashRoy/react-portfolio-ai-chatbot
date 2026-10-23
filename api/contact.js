// POST /api/contact: forwards contact-form submissions to a Telegram chat.
// Runs as a Vercel serverless function; server.cjs mounts the same handler for local dev.
import { rateLimit } from './_lib/rateLimit.js';

// Max characters per field; the form enforces the same limits with maxLength
const LIMITS = { name: 100, email: 254, subject: 150, message: 5000 };

const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function sendTelegramMessage(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error('TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not set');
    return false;
  }
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
    });
    const data = await response.json();
    if (!data.ok) console.error('Telegram API error:', data.description);
    return Boolean(data.ok);
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  if (!rateLimit(req, res, { name: 'contact', limit: 3, windowMs: 10 * 60_000 })) {
    return res.status(429).json({ success: false, error: 'Too many requests' });
  }

  try {
    const { name, email, subject, message, website } = req.body || {};

    // Honeypot: people never see the "website" field, bots fill it. Pretend it worked.
    if (website) return res.status(200).json({ success: true, message: 'Message sent successfully!' });

    const fields = { name, email, subject, message };
    if (Object.values(fields).some((v) => typeof v !== 'string' || !v.trim())) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }
    const tooLong = Object.keys(LIMITS).find((k) => fields[k].length > LIMITS[k]);
    if (tooLong) {
      return res.status(400).json({ success: false, error: `${tooLong} must be at most ${LIMITS[tooLong]} characters` });
    }

    const telegramMessage = `
🔔 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${esc(name)}
📧 <b>Email:</b> ${esc(email)}
📋 <b>Subject:</b> ${esc(subject)}

💬 <b>Message:</b>
${esc(message)}

⏰ <b>Time:</b> ${new Date().toLocaleString()}
    `.trim();

    const success = await sendTelegramMessage(telegramMessage);
    if (success) return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    return res.status(500).json({ success: false, error: 'Failed to send message' });
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
