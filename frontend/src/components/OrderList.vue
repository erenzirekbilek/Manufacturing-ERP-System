<template>
  <div class="order-list">
    <table v-if="orders.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Total</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.customerName }}</td>
          <td>{{ formatDate(order.date) }}</td>
          <td>{{ formatCurrency(order.total) }}</td>
          <td>{{ order.status }}</td>
          <td>
            <button @click="$emit('edit', order)">Edit</button>
            <button @click="$emit('delete', order.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No orders found.</p>
  </div>
</template>

<script setup>
defineProps({ orders: { type: Array, default: () => [] } });
defineEmits(['edit', 'delete']);

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}
</script>