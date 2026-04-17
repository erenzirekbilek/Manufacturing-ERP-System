<template>
  <div class="customers-view">
    <h1>Customers</h1>
    <button @click="showForm = true">New Customer</button>
    
    <CustomerList v-if="!showForm" :customers="customers" @edit="editCustomer" @delete="deleteCustomer" />
    <CustomerForm v-else :customer="editingCustomer" @submit="saveCustomer" @cancel="showForm = false" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CustomerService from '../services/CustomerService';
import CustomerList from '../components/CustomerList.vue';
import CustomerForm from '../components/CustomerForm.vue';

const customers = ref([]);
const showForm = ref(false);
const editingCustomer = ref(null);

async function loadCustomers() {
  customers.value = (await CustomerService.getCustomers()).data;
}

async function saveCustomer(data) {
  if (editingCustomer.value) {
    await CustomerService.updateCustomer(editingCustomer.value.id, data);
  } else {
    await CustomerService.createCustomer(data);
  }
  showForm.value = false;
  editingCustomer.value = null;
  await loadCustomers();
}

function editCustomer(customer) {
  editingCustomer.value = customer;
  showForm.value = true;
}

async function deleteCustomer(id) {
  await CustomerService.deleteCustomer(id);
  await loadCustomers();
}

onMounted(loadCustomers);
</script>