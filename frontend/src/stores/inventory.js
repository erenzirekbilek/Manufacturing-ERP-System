import { reactive, readonly } from 'vue';
import InventoryService from '../services/InventoryService';

const state = reactive({ items: [], loading: false, error: null });

export function useInventoryStore() {
  const fetchInventory = async () => { state.loading = true; try { state.items = (await InventoryService.getInventory()).data; state.error = null; } catch (e) { state.error = e.message; } finally { state.loading = false; } };
  const updateInventory = async (id, data) => { const res = await InventoryService.updateInventory(id, data); const idx = state.items.findIndex(i => i.id === id); if (idx !== -1) state.items[idx] = res.data; return res.data; };
  const adjustStock = async (id, quantity) => { const res = await InventoryService.adjustStock(id, quantity); const idx = state.items.findIndex(i => i.id === id); if (idx !== -1) state.items[idx] = res.data; return res.data; };
  return { items: readonly(state.items), loading: readonly(state.loading), error: readonly(state.error), fetchInventory, updateInventory, adjustStock };
}
export default useInventoryStore;