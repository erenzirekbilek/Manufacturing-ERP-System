<template>
  <div class="filter-search">
    <input
      v-model="query"
      type="text"
      :placeholder="placeholder"
      @input="emitSearch"
    />
    <select v-model="selectedFilter" @change="emitSearch">
      <option value="">{{ allLabel }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  placeholder: { type: String, default: 'Search...' },
  options: { type: Array, default: () => [] },
  allLabel: { type: String, default: 'All' }
});

const emit = defineEmits(['search']);

const query = ref('');
const selectedFilter = ref('');

function emitSearch() {
  emit('search', { query: query.value, filter: selectedFilter.value });
}
</script>

<style scoped>
.filter-search { display: flex; gap: 1rem; margin-bottom: 1rem; }
input, select { padding: 0.5rem; }
</style>