// Backend base URL. Set VITE_API_URL in production; falls back to the local Express server.
export const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');
