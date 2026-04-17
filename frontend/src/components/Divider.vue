<template>
  <hr class="divider" :class="variant" />
</template>

<script setup>
defineProps({ variant: { type: String, default: 'horizontal' } });
</script>

<style scoped>
.divider { border: none; border-top: 1px solid #e5e7eb; margin: 1rem 0; }
.divider.vertical { border-top: none; border-left: 1px solid #e5e7eb; width: 1px; height: 100%; margin: 0 1rem; }
</style>