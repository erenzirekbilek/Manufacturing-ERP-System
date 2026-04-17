<template>
  <div class="supplier-list">
    <table v-if="suppliers.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="supplier in suppliers" :key="supplier.id">
          <td>{{ supplier.id }}</td>
          <td>{{ supplier.name }}</td>
          <td>{{ supplier.contactName }}</td>
          <td>{{ supplier.email }}</td>
          <td>{{ supplier.phone }}</td>
          <td>
            <button @click="$emit('edit', supplier)">Edit</button>
            <button @click="$emit('delete', supplier.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No suppliers found.</p>
  </div>
</template>

<script setup>
defineProps({ suppliers: { type: Array, default: () => [] } });
defineEmits(['edit', 'delete']);
</script>