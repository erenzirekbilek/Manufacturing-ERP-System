import api from './api';

export default {
  getInventory: () => api.get('/inventory'),
  getInventoryById: (id) => api.get(`/inventory/${id}`),
  getInventoryByProduct: (productId) => api.get(`/inventory/product/${productId}`),
  updateInventory: (id, data) => api.put(`/inventory/${id}`, data),
  adjustStock: (id, quantity) => api.post(`/inventory/${id}/adjust`, { quantity })
};