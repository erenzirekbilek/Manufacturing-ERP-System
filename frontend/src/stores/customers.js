import { reactive, readonly } from 'vue';
import CustomerService from '../services/CustomerService';

const state = reactive({ customers: [], loading: false, error: null });

export function useCustomerStore() {
  const fetchCustomers = async () => { state.loading = true; try { state.customers = (await CustomerService.getCustomers()).data; state.error = null; } catch (e) { state.error = e.message; } finally { state.loading = false; } };
  const addCustomer = async (customer) => { const res = await CustomerService.createCustomer(customer); state.customers.push(res.data); return res.data; };
  const updateCustomer = async (id, customer) => { const res = await CustomerService.updateCustomer(id, customer); const idx = state.customers.findIndex(c => c.id === id); if (idx !== -1) state.customers[idx] = res.data; return res.data; };
  const removeCustomer = async (id) => { await CustomerService.deleteCustomer(id); state.customers = state.customers.filter(c => c.id !== id); };
  return { customers: readonly(state.customers), loading: readonly(state.loading), error: readonly(state.error), fetchCustomers, addCustomer, updateCustomer, removeCustomer };
}
export default useCustomerStore;