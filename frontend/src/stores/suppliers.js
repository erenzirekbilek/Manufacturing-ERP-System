import { reactive, readonly } from 'vue';
import SupplierService from '../services/SupplierService';

const state = reactive({ suppliers: [], loading: false, error: null });

export function useSupplierStore() {
  const fetchSuppliers = async () => { state.loading = true; try { state.suppliers = (await SupplierService.getSuppliers()).data; state.error = null; } catch (e) { state.error = e.message; } finally { state.loading = false; } };
  const addSupplier = async (supplier) => { const res = await SupplierService.createSupplier(supplier); state.suppliers.push(res.data); return res.data; };
  const updateSupplier = async (id, supplier) => { const res = await SupplierService.updateSupplier(id, supplier); const idx = state.suppliers.findIndex(s => s.id === id); if (idx !== -1) state.suppliers[idx] = res.data; return res.data; };
  const removeSupplier = async (id) => { await SupplierService.deleteSupplier(id); state.suppliers = state.suppliers.filter(s => s.id !== id); };
  return { suppliers: readonly(state.suppliers), loading: readonly(state.loading), error: readonly(state.error), fetchSuppliers, addSupplier, updateSupplier, removeSupplier };
}
export default useSupplierStore;