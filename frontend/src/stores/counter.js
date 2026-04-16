import { reactive } from 'vue';

export const store = reactive({
  user: null,
  isAuthenticated: false,
  login(userData) {
    this.user = userData;
    this.isAuthenticated = true;
  },
  logout() {
    this.user = null;
    this.isAuthenticated = false;
  }
});