<template>
  <div class="button-group">
    <button
      v-for="btn in buttons"
      :key="btn.value"
      :class="{ active: modelValue === btn.value }"
      @click="$emit('update:modelValue', btn.value)"
    >
      {{ btn.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: [String, Number], required: true },
  buttons: { type: Array, required: true }
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.button-group { display: flex; gap: 0; border: 1px solid #d1d5db; border-radius: 4px; overflow: hidden; }
.button-group button {
  padding: 0.5rem 1rem; border: none; background: white; cursor: pointer;
  border-right: 1px solid #d1d5db;
}
.button-group button:last-child { border-right: none; }
.button-group button.active { background: #3b82f6; color: white; }
</style>