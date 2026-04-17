<template>
  <div class="customer-list">
    <table v-if="customers.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>
            <button @click="$emit('edit', customer)">Edit</button>
            <button @click="$emit('delete', customer.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No customers found.</p>
  </div>
</template>

<script setup>
defineProps({ customers: { type: Array, default: () => [] } });
defineEmits(['edit', 'delete']);
</script>