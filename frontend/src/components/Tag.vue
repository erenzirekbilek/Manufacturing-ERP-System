<template>
  <span class="tag" :class="variant">
    <slot></slot>
  </span>
</template>

<script setup>
defineProps({ variant: { type: String, default: 'default' } });
</script>

<style scoped>
.tag { display: inline-block; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 500; }
.default { background: #e5e7eb; color: #374151; }
.primary { background: #dbeafe; color: #1e40af; }
.success { background: #dcfce7; color: #166534; }
.warning { background: #fef3c7; color: #92400e; }
.error { background: #fee2e2; color: #991b1b; }
</style>