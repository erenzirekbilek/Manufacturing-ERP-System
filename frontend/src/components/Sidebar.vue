<template>
  <aside class="sidebar" :class="{ collapsed }">
    <div class="sidebar-header">
      <h2 v-if="!collapsed">Manufacturing ERP</h2>
      <button @click="$emit('toggle')">☰</button>
    </div>
    <nav class="sidebar-nav">
      <router-link v-for="item in navItems" :key="item.path" :to="item.path">
        {{ item.icon }} {{ !collapsed ? item.label : '' }}
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
defineProps({ collapsed: { type: Boolean, default: false } });
defineEmits(['toggle']);

const navItems = [
  { path: '/', label: 'Dashboard', icon: '🏠' },
  { path: '/users', label: 'Users', icon: '👤' },
  { path: '/products', label: 'Products', icon: '📦' },
  { path: '/orders', label: 'Orders', icon: '📋' },
  { path: '/customers', label: 'Customers', icon: '👥' },
  { path: '/suppliers', label: 'Suppliers', icon: '🚚' },
  { path: '/inventory', label: 'Inventory', icon: '📊' },
  { path: '/reports', label: 'Reports', icon: '📈' }
];
</script>

<style scoped>
.sidebar {
  width: 250px; background: #1f2937; color: white;
  transition: width 0.3s; overflow: hidden;
}
.sidebar.collapsed { width: 60px; }
.sidebar-header { display: flex; justify-content: space-between; padding: 1rem; }
.sidebar-nav { display: flex; flex-direction: column; }
.sidebar-nav a {
  padding: 0.75rem 1rem; color: #d1d5db; text-decoration: none;
}
.sidebar-nav a:hover { background: #374151; }
</style>