<template>
  <div class="dropdown" ref="dropdownRef">
    <button class="dropdown-trigger" @click="open = !open">
      <slot name="trigger"></slot>
    </button>
    <div v-if="open" class="dropdown-menu">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const open = ref(false);
const dropdownRef = ref(null);

function close(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) open.value = false;
}

onMounted(() => document.addEventListener('click', close));
onUnmounted(() => document.removeEventListener('click', close));
</script>

<style scoped>
.dropdown { position: relative; display: inline-block; }
.dropdown-menu {
  position: absolute; top: 100%; left: 0; margin-top: 0.25rem;
  background: white; border: 1px solid #e5e7eb; border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15); min-width: 150px; z-index: 100;
}
</style>