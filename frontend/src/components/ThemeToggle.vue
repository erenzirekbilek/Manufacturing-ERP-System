<template>
  <button @click="toggleTheme" class="theme-toggle">
    {{ isDark ? '☀️' : '🌙' }}
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { applyTheme } from '../utils/theme';

const isDark = ref(false);

function toggleTheme() {
  isDark.value = !isDark.value;
  applyTheme(isDark.value ? 'dark' : 'light');
}

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark';
});
</script>

<style scoped>
.theme-toggle {
  background: none; border: none; cursor: pointer; font-size: 1.25rem;
}
</style>