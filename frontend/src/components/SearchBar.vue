<template>
  <div class="search-bar">
    <input
      v-model="query"
      type="text"
      :placeholder="placeholder"
      @input="debounceSearch"
    />
    <button v-if="showFilter" @click="showFilters = !showFilters">Filter</button>
    <div v-if="showFilters" class="filters">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  placeholder: { type: String, default: 'Search...' },
  showFilter: { type: Boolean, default: false },
  debounce: { type: Number, default: 300 }
});

const emit = defineEmits(['search']);

const query = ref('');
const showFilters = ref(false);
let timeout = null;

function debounceSearch() {
  clearTimeout(timeout);
  timeout = setTimeout(() => emit('search', query.value), props.debounce);
}
</script>

<style scoped>
.search-bar { display: flex; gap: 0.5rem; align-items: center; }
input { padding: 0.5rem 1rem; border: 1px solid #ddd; border-radius: 4px; flex: 1; }
.filters { position: absolute; margin-top: 0.5rem; padding: 1rem; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
</style>