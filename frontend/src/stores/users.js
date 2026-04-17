import { reactive, readonly } from 'vue';
import UserService from '../services/UserService';

const state = reactive({
  users: [],
  loading: false,
  error: null
});

export function useUserStore() {
  const fetchUsers = async () => {
    state.loading = true;
    try {
      state.users = (await UserService.getUsers()).data;
      state.error = null;
    } catch (e) {
      state.error = e.message;
    } finally {
      state.loading = false;
    }
  };

  const addUser = async (user) => {
    const res = await UserService.createUser(user);
    state.users.push(res.data);
    return res.data;
  };

  const updateUser = async (id, user) => {
    const res = await UserService.updateUser(id, user);
    const idx = state.users.findIndex(u => u.id === id);
    if (idx !== -1) state.users[idx] = res.data;
    return res.data;
  };

  const removeUser = async (id) => {
    await UserService.deleteUser(id);
    state.users = state.users.filter(u => u.id !== id);
  };

  return {
    users: readonly(state.users),
    loading: readonly(state.loading),
    error: readonly(state.error),
    fetchUsers,
    addUser,
    updateUser,
    removeUser
  };
}

export default useUserStore;