export function formatDate(date, locale = 'en-US') {
  return new Date(date).toLocaleDateString(locale);
}

export function formatDateTime(date, locale = 'en-US') {
  return new Date(date).toLocaleString(locale);
}

export function formatTime(date, locale = 'en-US') {
  return new Date(date).toLocaleTimeString(locale);
}

export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function diffDays(date1, date2) {
  const ms = new Date(date1) - new Date(date2);
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

export function isToday(date) {
  const today = new Date();
  return new Date(date).toDateString() === today.toDateString();
}

export function isSameDay(date1, date2) {
  return new Date(date1).toDateString() === new Date(date2).toDateString();
}

export default { formatDate, formatDateTime, formatTime, addDays, diffDays, isToday, isSameDay };