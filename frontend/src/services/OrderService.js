import api from './api';

export default {
  getOrders: () => api.get('/orders'),
  getOrderById: (id) => api.get(`/orders/${id}`),
  createOrder: (order) => api.post('/orders', order),
  updateOrder: (id, order) => api.put(`/orders/${id}`, order),
  deleteOrder: (id) => api.delete(`/orders/${id}`),
  updateOrderStatus: (id, status) => api.patch(`/orders/${id}/status`, { status })
};