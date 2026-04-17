<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/orders">Orders</router-link>
    <router-link to="/customers">Customers</router-link>
    <router-link to="/inventory">Inventory</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #333;
}
.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.navbar a:hover {
  text-decoration: underline;
}
</style>