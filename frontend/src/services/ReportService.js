import api from './api';

export default {
  getSalesReport: (params) => api.get('/reports/sales', { params }),
  getInventoryReport: (params) => api.get('/reports/inventory', { params }),
  getFinancialReport: (params) => api.get('/reports/financial', { params }),
  getCustomerReport: (params) => api.get('/reports/customers', { params }),
  getOrderReport: (params) => api.get('/reports/orders', { params }),
  exportReport: (type, format) => api.get(`/reports/export/${type}`, { params: { format }, responseType: 'blob' })
};