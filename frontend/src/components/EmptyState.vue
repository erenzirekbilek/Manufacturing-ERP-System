<template>
  <div class="empty-state">
    <div class="empty-icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <button v-if="$slots.action" @click="$emit('action')">
      <slot name="action"></slot>
    </button>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, default: '📭' },
  title: { type: String, default: 'No Data' },
  description: { type: String, default: 'No items to display.' }
});
defineEmits(['action']);
</script>

<style scoped>
.empty-state {
  text-align: center; padding: 3rem; color: #6b7280;
}
.empty-icon { font-size: 3rem; margin-bottom: 1rem; }
.empty-state h3 { margin: 0 0 0.5rem; color: #111827; }
.empty-state p { margin: 0 0 1rem; }
.empty-state button {
  padding: 0.5rem 1rem; background: #3b82f6; color: white;
  border: none; border-radius: 4px; cursor: pointer;
}
</style>