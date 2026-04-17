export const themes = {
  light: {
    primary: '#3b82f6',
    secondary: '#6b7280',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    background: '#ffffff',
    surface: '#f9fafb',
    text: '#111827',
    textSecondary: '#6b7280'
  },
  dark: {
    primary: '#60a5fa',
    secondary: '#9ca3af',
    success: '#34d399',
    warning: '#fbbf24',
    error: '#f87171',
    background: '#111827',
    surface: '#1f2937',
    text: '#f9fafb',
    textSecondary: '#9ca3af'
  }
};

export function getTheme(name = 'light') {
  return themes[name] || themes.light;
}

export function applyTheme(name) {
  const theme = getTheme(name);
  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  localStorage.setItem('theme', name);
}

export function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  applyTheme(saved);
}

export default { themes, getTheme, applyTheme, initTheme };