# Suyash Roy — Portfolio

Source for [suyashroy.me](https://suyashroy.me): a React portfolio with a hand-built canvas comet sky, a
scroll-driven project journey, dark and cream light themes, a Gemini-backed assistant that answers
questions about my work, and a contact form that delivers to Telegram.

## Stack

- **Frontend:** React 19, Vite 7, Tailwind CSS v4, React Router 7
- **Backend:** Vercel serverless functions in `api/` (Node), Google Gemini (`@google/generative-ai`), Telegram Bot API
- **Local server:** `server.cjs` (Express) mounts the same `api/` handlers so dev matches production

```
api/
  chat.js        POST /api/chat     { message }                        -> { message, source }
  contact.js     POST /api/contact  { name, email, subject, message }  -> { success, message | error }
src/
  data/profile.json   all site content (and the chatbot's knowledge)
  pages/              Home, About, Education, Experience, Projects, Contact
  components/         CometSky, Chatbot, Navbar, Footer, ui primitives
public/images/projects/  project photos (credits in profile.json)
server.cjs       local Express server for /api/*
vercel.json      SPA rewrite so deep links like /projects load on refresh
```

## Editing content

Everything on the site comes from **`src/data/profile.json`**: profile, links, stats, about, skills,
education, experience, projects and interests. The chatbot reads the same file, so editing it updates
both the pages and the assistant's answers. Projects appear on the journey timeline in `step` order.

## Local setup

Requires Node 18+.

```bash
git clone https://github.com/SuyashRoy/react-portfolio-ai-chatbot.git
cd react-portfolio-ai-chatbot
npm install
cp .env.example .env   # then fill in the keys you have
```

### Environment variables

| Name | Used by | Notes |
| --- | --- | --- |
| `GEMINI_API_KEY` | `api/chat.js` | Enables AI chat replies. Without it the chatbot answers from `profile.json` locally. |
| `GEMINI_MODEL` | `api/chat.js` | Optional, defaults to `gemini-3.8-flash`. |
| `TELEGRAM_BOT_TOKEN` | `api/contact.js` | Bot from @BotFather. Required for the contact form. |
| `TELEGRAM_CHAT_ID` | `api/contact.js` | Chat or group the bot posts into. Required for the contact form. |
| `PORT` | `server.cjs` | Local only, defaults to `5000`. |
| `VITE_API_URL` | frontend | Optional. Leave empty to call same-origin `/api/...`. Set only to use a backend on another origin. |

See `.env.example` for details. Never commit `.env`; it is gitignored.

### Running it

```bash
npm run full:dev     # Vite on :5173 + server.cjs on :5000 (with nodemon)
```

Or in two terminals:

```bash
npm run server       # node server.cjs, serves /api/chat and /api/contact
npm run dev          # Vite; proxies /api/* to the server above
```

The frontend always calls relative `/api/...` paths. In dev, Vite's proxy (`vite.config.js`) forwards
them to `server.cjs`; `npm run preview` proxies the same way for testing a production build.

Other scripts: `npm run build`, `npm run lint`.

## Deployment (Vercel)

Vercel builds the Vite app and deploys each file in `api/` as a serverless function on the same
domain, so no API URL is needed. Set `GEMINI_API_KEY`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` and
optionally `GEMINI_MODEL` under **Project Settings → Environment Variables**, then redeploy.
