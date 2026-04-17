export function filterBy(array, criteria) {
  return array.filter(item => {
    for (const [key, value] of Object.entries(criteria)) {
      if (item[key] !== value) return false;
    }
    return true;
  });
}

export function search(array, query, keys) {
  const q = query.toLowerCase();
  return array.filter(item => keys.some(key => String(item[key]).toLowerCase().includes(q)));
}

export function paginate(array, page = 1, limit = 10) {
  const start = (page - 1) * limit;
  return array.slice(start, start + limit);
}

export default { filterBy, search, paginate };