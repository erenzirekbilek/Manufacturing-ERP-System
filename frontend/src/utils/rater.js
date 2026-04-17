export function rateLimit(fn, limit = 5, windowMs = 60000) {
  const tokens = [];
  return function (...args) {
    const now = Date.now();
    while (tokens.length && tokens[0] < now - windowMs) tokens.shift();
    if (tokens.length >= limit) return Promise.reject(new Error('Rate limit exceeded'));
    tokens.push(now);
    return fn.apply(this, args);
  };
}

export default { rateLimit };