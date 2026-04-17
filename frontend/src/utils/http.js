import api from '../services/api';
import { handleApiError } from './errorHandler';
import { setCache, getCache, clearCache } from './cache';

export async function fetchWithCache(key, fetcher, ttl = 300000) {
  const cached = getCache(key);
  if (cached) return cached;
  const data = await fetcher();
  setCache(key, data, ttl);
  return data;
}

export async function retry(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try { return await fn(); } catch (e) { if (i === retries - 1) throw e; await new Promise(r => setTimeout(r, delay)); }
  }
}

export { handleApiError };
export default { fetchWithCache, retry, handleApiError };