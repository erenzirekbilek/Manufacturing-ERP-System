<template>
  <div class="toast-container">
    <div v-for="msg in messages" :key="msg.id" class="toast" :class="msg.type">
      {{ msg.message }}
      <button @click="removeToast(msg.id)">×</button>
    </div>
  </div>
</template>

<script setup>
import { useToast } from '../utils/toast';
const { messages, removeToast } = useToast();
</script>

<style scoped>
.toast-container {
  position: fixed; top: 1rem; right: 1rem; z-index: 2000;
  display: flex; flex-direction: column; gap: 0.5rem;
}
.toast {
  padding: 1rem; border-radius: 4px; background: #374151; color: white;
  display: flex; gap: 0.5rem; align-items: center;
}
.toast.success { background: #22c55e; }
.toast.error { background: #ef4444; }
.toast.warning { background: #f59e0b; }
</style>