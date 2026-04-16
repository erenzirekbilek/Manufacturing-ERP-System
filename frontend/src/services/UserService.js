import api from './api';

export default {
  getAll() {
    return api.getUsers();
  },
  get(id) {
    return api.getUserById(id);
  },
  create(data) {
    return api.createUser(data);
  },
  update(id, data) {
    return api.updateUser(id, data);
  },
  delete(id) {
    return api.deleteUser(id);
  }
};