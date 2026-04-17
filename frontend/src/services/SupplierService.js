import api from './api';

export default {
  getSuppliers: () => api.get('/suppliers'),
  getSupplierById: (id) => api.get(`/suppliers/${id}`),
  createSupplier: (supplier) => api.post('/suppliers', supplier),
  updateSupplier: (id, supplier) => api.put(`/suppliers/${id}`, supplier),
  deleteSupplier: (id) => api.delete(`/suppliers/${id}`)
};