<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="stats">
      <div class="stat-card">
        <h3>Total Users</h3>
        <p>{{ stats.users }}</p>
      </div>
      <div class="stat-card">
        <h3>Total Products</h3>
        <p>{{ stats.products }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import UserService from '../services/UserService';
import ProductService from '../services/ProductService';

const stats = ref({ users: 0, products: 0 });

onMounted(async () => {
  const usersRes = await UserService.getAll();
  const productsRes = await ProductService.getAll();
  stats.value = {
    users: usersRes.data.length,
    products: productsRes.data.length
  };
});
</script>

<style scoped>
.stats {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.stat-card {
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  min-width: 150px;
}
</style>