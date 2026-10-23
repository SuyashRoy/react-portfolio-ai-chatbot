import React, { useState, useRef, useEffect } from 'react';
import profile from '../data/profile.json';
import { API_URL } from '../lib/api';

// The server gives Gemini 9s; abort a little later to cover cold starts, then answer locally
const CHAT_TIMEOUT_MS = 10000;

const suggestions = ['What is he working on now?', 'Top projects?', 'Skills', 'Education'];

const list = (items) => items.join(', ').replace(/, ([^,]*)$/, ' and $1');

// Used when the backend is unreachable; answers straight from profile.json
const generateBotResponse = (userMessage) => {
  const m = userMessage.toLowerCase();
  const [brasa, research, bain, highradius] = profile.experience;
  const [usc, kiit] = profile.education;
  const featured = profile.projects.filter((p) => p.featured);

  if (/(\bnow\b|current|brasa|working on)/.test(m)) {
    return `Suyash is currently the ${brasa.role} at ${brasa.company}: ${brasa.summary} He's also a ${research.role} at USC. ${research.summary}`;
  }
  if (/(skill|tech|stack|language|tool)/.test(m)) {
    return profile.skills.map((s) => `${s.group}: ${list(s.items)}.`).join(' ');
  }
  if (/(education|degree|usc|kiit|gpa|study|course|graduat)/.test(m)) {
    return `He's pursuing an ${usc.degree} at ${usc.school} (${usc.dates}, GPA ${usc.gpa}), with coursework including ${list(usc.courses.slice(0, 4).map((c) => c.name))}. Before that he earned a ${kiit.degree} from ${kiit.school} with a ${kiit.gpa} GPA.`;
  }
  if (/(bain|consult)/.test(m)) {
    return `At ${bain.company} (${bain.dates}) he was an ${bain.role}. ${bain.highlights.slice(0, 2).join(' ')}`;
  }
  if (/highradius/.test(m)) {
    return `At ${highradius.company} (${highradius.dates}) he was a ${highradius.role}. ${highradius.highlights[0]}`;
  }
  if (/(experience|work|job|career|research)/.test(m)) {
    return `His experience: ${profile.experience.map((e) => `${e.role} at ${e.company} (${e.dates})`).join('; ')}. See the Experience page for details.`;
  }
  if (/project/.test(m)) {
    return `Highlights include ${featured.map((p) => `${p.title}: ${p.summary}`).join(' ')} There are ${profile.projects.length} projects on the Projects page.`;
  }
  const project = profile.projects.find((p) => m.includes(p.title.toLowerCase().split(' ')[0]));
  if (project) return `${project.title} (${project.dates}): ${project.summary} ${project.highlights.join(' ')}`;
  if (/(contact|email|reach|hire|linkedin)/.test(m)) {
    return `You can email Suyash at ${profile.links.email}, find him on LinkedIn, or use the contact form on this site. He's ${profile.availability[0].toLowerCase()}${profile.availability.slice(1)}.`;
  }
  if (/(interest|hobb|fun|free time)/.test(m)) return profile.interests;
  if (/\b(hello|hi|hey)\b/.test(m)) {
    return "Hello! Ask me about Suyash's current work, projects, skills or education.";
  }
  return "I can tell you about Suyash's current work at Brasa, his research at USC, his projects, skills or education. What would you like to know?";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Suyash's portfolio assistant. Ask me anything about his work, projects or background.",
      sender: 'bot',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const send = async (text) => {
    const message = text.trim();
    if (!message || isTyping) return;
    setMessages((prev) => [...prev, { id: Date.now(), text: message, sender: 'user' }]);
    setInputMessage('');
    setIsTyping(true);

    let reply;
    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
        signal: AbortSignal.timeout(CHAT_TIMEOUT_MS),
      });
      if (!response.ok) throw new Error('Failed to get response');
      reply = (await response.json()).message;
    } catch {
      reply = generateBotResponse(message);
    }
    setMessages((prev) => [...prev, { id: Date.now() + 1, text: reply, sender: 'bot' }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end md:bottom-6 md:right-6">
      {isOpen && (
        <div className="glass mb-3 flex h-[min(34rem,calc(100svh-7rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:w-96">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div className="flex items-center gap-3">
              <img src="/favicon.svg" alt="" className="h-9 w-9 rounded-xl" />
              <div>
                <h3 className="text-sm font-medium text-fg">Portfolio Assistant</h3>
                <p className="flex items-center gap-1.5 text-xs text-fg-subtle">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Ask about Suyash
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-full text-fg-muted transition-colors hover:bg-surface-hover hover:text-fg"
              aria-label="Close chat"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <p
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'rounded-br-md bg-fg text-bg'
                      : 'rounded-bl-md border border-line bg-surface text-fg'
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-1 rounded-2xl rounded-bl-md border border-line bg-surface px-4 py-3.5 w-fit" role="status" aria-label="Assistant is typing">
                {[0, 0.15, 0.3].map((d) => (
                  <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-fg-muted" style={{ animationDelay: `${d}s` }} />
                ))}
              </div>
            )}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-line px-3 py-1.5 text-xs text-fg-muted transition-colors hover:border-accent hover:text-fg"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(inputMessage);
            }}
            className="flex items-center gap-2 border-t border-line p-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              maxLength={1000}
              placeholder="Ask about Suyash…"
              className="h-11 flex-1 rounded-full border border-line bg-surface px-4 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-fg text-bg transition-opacity disabled:opacity-40"
              aria-label="Send message"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen((o) => !o)}
        className="glass group flex h-14 items-center gap-2 rounded-full pl-4 pr-5 text-sm text-fg shadow-[0_10px_40px_-10px_var(--glow)] transition-all hover:border-line-strong"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        <span className="relative grid h-7 w-7 place-items-center">
          <span className="absolute inset-0 rounded-full bg-accent/20 blur-md transition-opacity group-hover:opacity-100" />
          <svg className="relative h-5 w-5 text-accent-text" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
          </svg>
        </span>
        <span className="hidden sm:inline">{isOpen ? 'Close' : 'Ask about me'}</span>
      </button>
    </div>
  );
};

export default Chatbot;
