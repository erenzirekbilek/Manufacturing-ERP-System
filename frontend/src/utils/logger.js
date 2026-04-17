const LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };
let currentLevel = LOG_LEVELS.info;

export function setLevel(level) {
  currentLevel = LOG_LEVELS[level] ?? 1;
}

function log(level, ...args) {
  if (LOG_LEVELS[level] >= currentLevel) {
    console[level === 'error' ? 'error' : level === 'warn' ? 'warn' : 'log'](`[${level.toUpperCase()}]`, new Date().toISOString(), ...args);
  }
}

export const debug = (...args) => log('debug', ...args);
export const info = (...args) => log('info', ...args);
export const warn = (...args) => log('warn', ...args);
export const error = (...args) => log('error', ...args);

export default { debug, info, warn, error, setLevel };