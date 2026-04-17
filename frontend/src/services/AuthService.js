import api from './api';
import { ref } from 'vue';

const currentUser = ref(null);
const token = ref(localStorage.getItem('authToken'));

export default {
  login: async (credentials) => {
    const res = await api.post('/auth/login', credentials);
    token.value = res.data.token;
    currentUser.value = res.data.user;
    localStorage.setItem('authToken', res.data.token);
    return res.data;
  },

  logout: () => {
    token.value = null;
    currentUser.value = null;
    localStorage.removeItem('authToken');
  },

  getToken: () => token.value,

  getCurrentUser: () => currentUser.value,

  isAuthenticated: () => !!token.value,

  refreshToken: async () => {
    const res = await api.post('/auth/refresh');
    token.value = res.data.token;
    localStorage.setItem('authToken', res.data.token);
    return res.data;
  }
};