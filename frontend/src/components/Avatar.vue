<template>
  <div class="avatar" :class="[size, shape]" :style="{ backgroundColor: bgColor }">
    <img v-if="src" :src="src" :alt="alt" />
    <span v-else>{{ initials }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: { type: String, default: '' },
  name: { type: String, default: '' },
  alt: { type: String, default: '' },
  size: { type: String, default: 'md' },
  shape: { type: String, default: 'circle' }
});

const initials = computed(() => {
  if (!props.name) return '?';
  return props.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
});

const bgColor = computed(() => {
  if (!props.name) return '#9ca3af';
  const colors = ['#f87171', '#fbbf24', '#34d399', '#60a5fa', '#818cf8', '#a78bfa'];
  const idx = props.name.charCodeAt(0) % colors.length;
  return colors[idx];
});
</script>

<style scoped>
.avatar {
  display: inline-flex; align-items: center; justify-content: center;
  font-weight: 600; color: white;
}
.circle { border-radius: 50%; }
.square { border-radius: 4px; }
.sm { width: 32px; height: 32px; font-size: 0.75rem; }
.md { width: 40px; height: 40px; font-size: 1rem; }
.lg { width: 56px; height: 56px; font-size: 1.25rem; }
img { width: 100%; height: 100%; object-fit: cover; }
</style>