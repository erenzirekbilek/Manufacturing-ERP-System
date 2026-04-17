<template>
  <div class="pagination">
    <button :disabled="page === 1" @click="$emit('change', page - 1)">Prev</button>
    <span>Page {{ page }} of {{ totalPages }}</span>
    <button :disabled="page === totalPages" @click="$emit('change', page + 1)">Next</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  page: { type: Number, default: 1 },
  total: { type: Number, default: 0 },
  perPage: { type: Number, default: 10 }
});

defineEmits(['change']);

const totalPages = computed(() => Math.ceil(props.total / props.perPage));
</script>

<style scoped>
.pagination { display: flex; gap: 1rem; align-items: center; margin-top: 1rem; }
button { padding: 0.5rem 1rem; }
button:disabled { opacity: 0.5; cursor: not-allowed; }
</style>