<template>
  <nav class="breadcrumb">
    <router-link v-for="(item, idx) in items" :key="idx" :to="item.path">
      {{ item.label }}
    </router-link>
  </nav>
</template>

<script setup>
defineProps({ items: { type: Array, required: true } });
</script>

<style scoped>
.breadcrumb { display: flex; gap: 0.5rem; align-items: center; }
.breadcrumb a { color: #3b82f6; text-decoration: none; }
.breadcrumb a:not(:last-child)::after { content: '/'; margin-left: 0.5rem; color: #9ca3af; }
.breadcrumb a:last-child { color: #374151; }
</style>