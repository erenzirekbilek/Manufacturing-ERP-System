export function sortBy(array, key, order = 'asc') {
  return [...array].sort((a, b) => {
    if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
    return 0;
  });
}

export function groupBy(array, key) {
  return array.reduce((acc, item) => {
    const group = item[key];
    (acc[group] = acc[group] || []).push(item);
    return acc;
  }, {});
}

export function unique(array, key) {
  if (key) return [...new Map(array.map(i => [i[key], i])).values()];
  return [...new Set(array)];
}

export default { sortBy, groupBy, unique };