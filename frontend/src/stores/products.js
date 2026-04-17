import { reactive, readonly } from 'vue';
import ProductService from '../services/ProductService';

const state = reactive({
  products: [],
  loading: false,
  error: null
});

export function useProductStore() {
  const fetchProducts = async () => {
    state.loading = true;
    try {
      state.products = (await ProductService.getProducts()).data;
      state.error = null;
    } catch (e) {
      state.error = e.message;
    } finally {
      state.loading = false;
    }
  };

  const addProduct = async (product) => {
    const res = await ProductService.createProduct(product);
    state.products.push(res.data);
    return res.data;
  };

  const updateProduct = async (id, product) => {
    const res = await ProductService.updateProduct(id, product);
    const idx = state.products.findIndex(p => p.id === id);
    if (idx !== -1) state.products[idx] = res.data;
    return res.data;
  };

  const removeProduct = async (id) => {
    await ProductService.deleteProduct(id);
    state.products = state.products.filter(p => p.id !== id);
  };

  return {
    products: readonly(state.products),
    loading: readonly(state.loading),
    error: readonly(state.error),
    fetchProducts,
    addProduct,
    updateProduct,
    removeProduct
  };
}

export default useProductStore;