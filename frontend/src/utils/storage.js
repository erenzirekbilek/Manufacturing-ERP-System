export function getItem(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return localStorage.getItem(key);
  }
}

export function setItem(key, value) {
  localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
}

export function removeItem(key) {
  localStorage.removeItem(key);
}

export function clear() {
  localStorage.clear();
}

export default { getItem, setItem, removeItem, clear };