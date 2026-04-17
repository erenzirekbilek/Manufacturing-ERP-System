<template>
  <div class="spinner-container">
    <div class="spinner" :class="[size, color]"></div>
    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  size: { type: String, default: 'md' },
  color: { type: String, default: 'primary' },
  text: { type: String, default: '' }
});
</script>

<style scoped>
.spinner-container { text-align: center; padding: 2rem; }
.spinner {
  border: 3px solid #f3f3f3; border-top-color: transparent; border-radius: 50%;
  animation: spin 0.8s linear infinite; margin: 0 auto;
}
.sm { width: 20px; height: 20px; }
.md { width: 40px; height: 40px; }
.lg { width: 60px; height: 60px; }
.primary { border-color: #3b82f6; }
.white { border-color: white; }
p { margin-top: 1rem; color: #6b7280; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>