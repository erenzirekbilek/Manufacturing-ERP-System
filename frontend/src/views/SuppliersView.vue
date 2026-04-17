<template>
  <div class="suppliers-view">
    <h1>Suppliers</h1>
    <button @click="showForm = true">New Supplier</button>
    <SupplierList v-if="!showForm" :suppliers="suppliers" @edit="editSupplier" @delete="deleteSupplier" />
    <SupplierForm v-else :supplier="editingSupplier" @submit="saveSupplier" @cancel="closeForm" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SupplierService from '../services/SupplierService';
import SupplierList from '../components/SupplierList.vue';
import SupplierForm from '../components/SupplierForm.vue';

const suppliers = ref([]);
const showForm = ref(false);
const editingSupplier = ref(null);

async function loadSuppliers() {
  suppliers.value = (await SupplierService.getSuppliers()).data;
}

async function saveSupplier(data) {
  if (editingSupplier.value) {
    await SupplierService.updateSupplier(editingSupplier.value.id, data);
  } else {
    await SupplierService.createSupplier(data);
  }
  closeForm();
  await loadSuppliers();
}

function editSupplier(supplier) {
  editingSupplier.value = supplier;
  showForm.value = true;
}

async function deleteSupplier(id) {
  await SupplierService.deleteSupplier(id);
  await loadSuppliers();
}

function closeForm() {
  showForm.value = false;
  editingSupplier.value = null;
}

onMounted(loadSuppliers);
</script>