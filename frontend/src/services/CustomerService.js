import api from './api';

export default {
  getCustomers: () => api.get('/customers'),
  getCustomerById: (id) => api.get(`/customers/${id}`),
  createCustomer: (customer) => api.post('/customers', customer),
  updateCustomer: (id, customer) => api.put(`/customers/${id}`, customer),
  deleteCustomer: (id) => api.delete(`/customers/${id}`)
};