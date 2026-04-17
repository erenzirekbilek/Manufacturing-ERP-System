import { reactive, readonly } from 'vue';
import OrderService from '../services/OrderService';

const state = reactive({ orders: [], loading: false, error: null });

export function useOrderStore() {
  const fetchOrders = async () => {
    state.loading = true;
    try { state.orders = (await OrderService.getOrders()).data; state.error = null; }
    catch (e) { state.error = e.message; }
    finally { state.loading = false; }
  };
  const addOrder = async (order) => { const res = await OrderService.createOrder(order); state.orders.push(res.data); return res.data; };
  const updateOrder = async (id, order) => { const res = await OrderService.updateOrder(id, order); const idx = state.orders.findIndex(o => o.id === id); if (idx !== -1) state.orders[idx] = res.data; return res.data; };
  const removeOrder = async (id) => { await OrderService.deleteOrder(id); state.orders = state.orders.filter(o => o.id !== id); };
  return { orders: readonly(state.orders), loading: readonly(state.loading), error: readonly(state.error), fetchOrders, addOrder, updateOrder, removeOrder };
}
export default useOrderStore;