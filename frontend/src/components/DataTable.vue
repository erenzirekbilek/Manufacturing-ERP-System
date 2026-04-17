<template>
  <div class="data-table">
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key" @click="sort(col.key)">
            {{ col.label }}
            <span v-if="sortKey === col.key">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in sortedData" :key="row.id" @click="$emit('row-click', row)">
          <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  columns: { type: Array, required: true },
  data: { type: Array, default: () => [] }
});

defineEmits(['row-click']);

const sortKey = ref(null);
const sortOrder = ref('asc');

const sortedData = computed(() => {
  if (!sortKey.value) return props.data;
  return [...props.data].sort((a, b) => {
    const cmp = a[sortKey.value] > b[sortKey.value] ? 1 : -1;
    return sortOrder.value === 'asc' ? cmp : -cmp;
  });
});

function sort(key) {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortOrder.value = 'asc';
  }
}
</script>

<style scoped>
table { width: 100%; border-collapse: collapse; }
th, td { padding: 0.75rem; text-align: left; border-bottom: 1px solid #ddd; }
th { cursor: pointer; background: #f5f5f5; }
tr:hover { background: #f9f9f9; }
</style>