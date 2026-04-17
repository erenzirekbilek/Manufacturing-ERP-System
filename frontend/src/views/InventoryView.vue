<template>
  <div class="inventory-view">
    <h1>Inventory</h1>
    <DataTable :columns="columns" :data="inventory" @row-click="editItem" />
    <Pagination :page="page" :total="total" @change="loadPage" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import InventoryService from '../services/InventoryService';
import DataTable from '../components/DataTable.vue';
import Pagination from '../components/Pagination.vue';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'productName', label: 'Product' },
  { key: 'quantity', label: 'Quantity' },
  { key: 'location', label: 'Location' },
  { key: 'lastUpdated', label: 'Last Updated' }
];

const inventory = ref([]);
const page = ref(1);
const total = ref(0);

async function loadInventory() {
  const res = await InventoryService.getInventory();
  inventory.value = res.data;
}

function editItem(item) {
  console.log('Edit', item);
}

function loadPage(p) {
  page.value = p;
  loadInventory();
}

onMounted(loadInventory);
</script>