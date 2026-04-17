<template>
  <div class="tooltip-wrapper" @mouseenter="show = true" @mouseleave="show = false">
    <slot></slot>
    <div v-if="show" class="tooltip">{{ text }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({ text: { type: String, default: '' } });
const show = ref(false);
</script>

<style scoped>
.tooltip-wrapper { position: relative; display: inline-block; }
.tooltip { position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background: #333; color: white; padding: 0.5rem; border-radius: 4px; font-size: 0.75rem; white-space: nowrap; margin-bottom: 0.5rem; }
</style>