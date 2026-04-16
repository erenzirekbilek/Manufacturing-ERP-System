<template>
  <div class="products-view">
    <h1>Products</h1>
    <button @click="showForm = !showForm">
      {{ showForm ? 'Close Form' : 'Add Product' }}
    </button>
    <ProductForm v-if="showForm" @saved="onSaved" />
    <ProductList @edit="editProduct" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductList from '../components/ProductList.vue';
import ProductForm from '../components/ProductForm.vue';

const showForm = ref(false);
const editId = ref(null);

const onSaved = () => {
  showForm.value = false;
};

const editProduct = (id) => {
  editId.value = id;
  showForm.value = true;
};
</script>