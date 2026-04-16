import api from './api';

export default {
  getAll() {
    return api.getProducts();
  },
  get(id) {
    return api.getProductById(id);
  },
  create(data) {
    return api.createProduct(data);
  },
  update(id, data) {
    return api.updateProduct(id, data);
  },
  delete(id) {
    return api.deleteProduct(id);
  }
};