// Backend base URL. Empty means same origin (/api/... on Vercel, proxied to server.cjs by Vite in dev).
export const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
