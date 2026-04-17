<template>
  <div class="progress">
    <div class="progress-bar" :style="{ width: value + '%' }"></div>
  </div>
</template>

<script setup>
defineProps({ value: { type: Number, default: 0 } });
</script>

<style scoped>
.progress { width: 100%; height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden; }
.progress-bar { height: 100%; background: #3b82f6; transition: width 0.3s; }
</style>