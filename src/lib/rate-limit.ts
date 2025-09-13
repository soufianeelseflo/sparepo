const buckets = new Map<string, { tokens: number; updatedAt: number }>();

export function rateLimit(id: string, max = 10, refillPerSec = 0.5) {
  const now = Date.now();
  const b = buckets.get(id) ?? { tokens: max, updatedAt: now };
  // refill
  const delta = (now - b.updatedAt) / 1000;
  b.tokens = Math.min(max, b.tokens + delta * refillPerSec);
  b.updatedAt = now;
  if (b.tokens < 1) {
    buckets.set(id, b);
    return false;
  }
  b.tokens -= 1;
  buckets.set(id, b);
  return true;
}
