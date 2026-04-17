<template>
  <form @submit.prevent="submit" class="supplier-form">
    <div class="form-group">
      <label>Name</label>
      <input v-model="form.name" type="text" required />
    </div>
    <div class="form-group">
      <label>Contact Name</label>
      <input v-model="form.contactName" type="text" required />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input v-model="form.email" type="email" required />
    </div>
    <div class="form-group">
      <label>Phone</label>
      <input v-model="form.phone" type="tel" />
    </div>
    <div class="form-group">
      <label>Address</label>
      <textarea v-model="form.address"></textarea>
    </div>
    <button type="submit">{{ supplier ? 'Update' : 'Create' }} Supplier</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';

const props = defineProps({ supplier: { type: Object, default: null } });
const emit = defineEmits(['submit']);

const form = reactive({
  name: props.supplier?.name || '',
  contactName: props.supplier?.contactName || '',
  email: props.supplier?.email || '',
  phone: props.supplier?.phone || '',
  address: props.supplier?.address || ''
});

function submit() {
  emit('submit', { ...form });
}
</script>

<style scoped>
.form-group { margin-bottom: 1rem; }
label { display: block; margin-bottom: 0.25rem; }
input, textarea { width: 100%; padding: 0.5rem; }
</style>