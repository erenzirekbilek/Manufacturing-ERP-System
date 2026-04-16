<template>
  <div class="product-list">
    <h2>Products</h2>
    <button @click="fetchProducts">Refresh</button>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }} (Qty: {{ product.quantity }})
        <button @click="deleteProduct(product.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductService from '../services/ProductService';

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await ProductService.getAll();
    products.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteProduct = async (id) => {
  try {
    await ProductService.delete(id);
    fetchProducts();
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchProducts);
</script>