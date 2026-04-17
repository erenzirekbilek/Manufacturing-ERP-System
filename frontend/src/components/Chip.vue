<template>
  <span class="chip" :class="{ removable }">
    <slot></slot>
    <button v-if="removable" @click="$emit('remove')" class="chip-remove">×</button>
  </span>
</template>

<script setup>
defineProps({ removable: { type: Boolean, default: false } });
defineEmits(['remove']);
</script>

<style scoped>
.chip {
  display: inline-flex; align-items: center; gap: 0.25rem;
  padding: 0.25rem 0.75rem; background: #e5e7eb; border-radius: 9999px; font-size: 0.875rem;
}
.chip-remove {
  background: none; border: none; cursor: pointer; font-size: 1.25rem; line-height: 1;
}
</style>