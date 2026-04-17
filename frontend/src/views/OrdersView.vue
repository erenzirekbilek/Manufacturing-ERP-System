<template>
  <div class="orders-view">
    <h1>Orders</h1>
    <button @click="showForm = true">New Order</button>
    
    <OrderList v-if="!showForm" :orders="orders" @edit="editOrder" @delete="deleteOrder" />
    <OrderForm v-else :order="editingOrder" @submit="saveOrder" @cancel="showForm = false" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import OrderService from '../services/OrderService';
import OrderList from '../components/OrderList.vue';
import OrderForm from '../components/OrderForm.vue';

const orders = ref([]);
const showForm = ref(false);
const editingOrder = ref(null);

async function loadOrders() {
  orders.value = (await OrderService.getOrders()).data;
}

async function saveOrder(data) {
  if (editingOrder.value) {
    await OrderService.updateOrder(editingOrder.value.id, data);
  } else {
    await OrderService.createOrder(data);
  }
  showForm.value = false;
  editingOrder.value = null;
  await loadOrders();
}

function editOrder(order) {
  editingOrder.value = order;
  showForm.value = true;
}

async function deleteOrder(id) {
  await OrderService.deleteOrder(id);
  await loadOrders();
}

onMounted(loadOrders);
</script>