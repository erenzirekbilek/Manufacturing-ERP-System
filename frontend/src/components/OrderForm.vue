<template>
  <form @submit.prevent="submit" class="order-form">
    <div class="form-group">
      <label>Customer</label>
      <input v-model="form.customerId" type="number" required />
    </div>
    <div class="form-group">
      <label>Items</label>
      <textarea v-model="form.items" placeholder="JSON array" required></textarea>
    </div>
    <div class="form-group">
      <label>Status</label>
      <select v-model="form.status">
        <option value="pending">Pending</option>
        <option value="processing">Processing</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </select>
    </div>
    <button type="submit">{{ order ? 'Update' : 'Create' }} Order</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';

const props = defineProps({ order: { type: Object, default: null } });
const emit = defineEmits(['submit']);

const form = reactive({
  customerId: props.order?.customerId || '',
  items: props.order?.items || '',
  status: props.order?.status || 'pending'
});

function submit() {
  emit('submit', { ...form, items: JSON.parse(form.items) });
}
</script>

<style scoped>
.form-group { margin-bottom: 1rem; }
label { display: block; margin-bottom: 0.25rem; }
input, textarea, select { width: 100%; padding: 0.5rem; }
</style>