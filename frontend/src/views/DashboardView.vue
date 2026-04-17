<template>
  <div class="dashboard-view">
    <h1>Dashboard</h1>
    <div class="stats-grid">
      <StatCard title="Total Users" :value="stats.users" :change="12" variant="primary" />
      <StatCard title="Products" :value="stats.products" :change="5" variant="success" />
      <StatCard title="Orders" :value="stats.orders" :change="-3" variant="warning" />
      <StatCard title="Revenue" :value="formatCurrency(stats.revenue)" :change="8" variant="info" />
    </div>
    <div class="dashboard-grid">
      <Card>
        <template #header>Recent Orders</template>
        <DataTable :columns="orderColumns" :data="recentOrders" />
      </Card>
      <Card>
        <template #header>Top Products</template>
        <DataTable :columns="productColumns" :data="topProducts" />
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import StatCard from '../components/StatCard.vue';
import Card from '../components/Card.vue';
import DataTable from '../components/DataTable.vue';
import { formatCurrency } from '../utils/format';

const stats = ref({ users: 0, products: 0, orders: 0, revenue: 0 });
const recentOrders = ref([]);
const topProducts = ref([]);

const orderColumns = [
  { key: 'id', label: 'Order ID' },
  { key: 'customer', label: 'Customer' },
  { key: 'total', label: 'Total' },
  { key: 'status', label: 'Status' }
];

const productColumns = [
  { key: 'name', label: 'Product' },
  { key: 'sales', label: 'Sales' },
  { key: 'revenue', label: 'Revenue' }
];

onMounted(() => {
  stats.value = { users: 150, products: 320, orders: 85, revenue: 45200 };
  recentOrders.value = [
    { id: '#1001', customer: 'John Doe', total: 250, status: 'Pending' },
    { id: '#1002', customer: 'Jane Smith', total: 180, status: 'Shipped' }
  ];
  topProducts.value = [
    { name: 'Widget A', sales: 120, revenue: 12000 },
    { name: 'Widget B', sales: 95, revenue: 9500 }
  ];
});
</script>

<style scoped>
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.dashboard-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1rem; }
</style>