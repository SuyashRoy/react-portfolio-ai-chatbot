import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// In dev, /api/* is forwarded to server.cjs (npm run server), which mounts the same
// handlers Vercel deploys from api/. In production the functions are same-origin.
const proxy = { '/api': `http://localhost:${process.env.PORT || 5000}` }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
  server: { proxy },
  preview: { proxy },
})
