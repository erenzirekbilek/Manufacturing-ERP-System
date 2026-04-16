<template>
  <div class="product-form">
    <h2>{{ isEdit ? 'Edit Product' : 'Add Product' }}</h2>
    <form @submit.prevent="submitForm">
      <input v-model="product.name" placeholder="Product Name" required />
      <input v-model="product.description" placeholder="Description" />
      <input v-model="product.price" type="number" step="0.01" placeholder="Price" required />
      <input v-model="product.quantity" type="number" placeholder="Quantity" required />
      <input v-model="product.sku" placeholder="SKU" />
      <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProductService from '../services/ProductService';

const props = defineProps({ productId: Number });
const emit = defineEmits(['saved']);

const product = ref({ name: '', description: '', price: 0, quantity: 0, sku: '' });
const isEdit = ref(false);

const submitForm = async () => {
  try {
    if (isEdit.value) {
      await ProductService.update(props.productId, product.value);
    } else {
      await ProductService.create(product.value);
    }
    emit('saved');
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  if (props.productId) {
    isEdit.value = true;
    const response = await ProductService.get(props.productId);
    product.value = response.data;
  }
});
</script>