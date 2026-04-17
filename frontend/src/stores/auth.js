import { reactive, readonly } from 'vue';
import AuthService from '../services/AuthService';
import { getItem, setItem, removeItem } from '../utils/storage';

const state = reactive({ user: getItem('user') || null, token: AuthService.getToken(), loading: false });

export function useAuthStore() {
  const login = async (credentials) => { state.loading = true; try { const data = await AuthService.login(credentials); state.user = data.user; state.token = data.token; setItem('user', data.user); return data; } finally { state.loading = false; } };
  const logout = () => { AuthService.logout(); state.user = null; state.token = null; removeItem('user'); };
  const isAuthenticated = () => !!state.token;
  return { user: readonly(state.user), token: readonly(state.token), loading: readonly(state.loading), login, logout, isAuthenticated };
}
export default useAuthStore;