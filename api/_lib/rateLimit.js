// Per-IP fixed-window rate limiter kept in function memory. Vercel reuses warm instances,
// so this stops bursts from one client; counts reset on cold starts and are not shared
// across instances, which is fine for a portfolio but not a hard quota.
// Files under api/_lib are not deployed as routes.
const buckets = new Map();

const clientIp = (req) =>
  String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
  req.headers['x-real-ip'] ||
  req.socket?.remoteAddress ||
  'unknown';

export function rateLimit(req, res, { name, limit, windowMs }) {
  const now = Date.now();
  const key = `${name}:${clientIp(req)}`;
  let bucket = buckets.get(key);
  if (!bucket || now >= bucket.reset) {
    bucket = { count: 0, reset: now + windowMs };
    buckets.set(key, bucket);
  }
  bucket.count += 1;

  if (buckets.size > 5000) {
    for (const [k, b] of buckets) if (now >= b.reset) buckets.delete(k);
  }

  if (bucket.count <= limit) return true;
  res.setHeader('Retry-After', String(Math.ceil((bucket.reset - now) / 1000)));
  return false;
}
