<template>
  <button :disabled="loading || disabled" class="loading-button">
    <span v-if="loading" class="spinner"></span>
    <slot v-else></slot>
  </button>
</template>

<script setup>
defineProps({
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
});
</script>

<style scoped>
.loading-button {
  padding: 0.5rem 1rem; border: none; border-radius: 4px;
  background: #3b82f6; color: white; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
}
.loading-button:disabled { opacity: 0.6; cursor: not-allowed; }
.spinner {
  width: 1rem; height: 1rem; border: 2px solid white;
  border-top-color: transparent; border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>