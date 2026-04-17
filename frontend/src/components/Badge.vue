<template>
  <span class="badge" :class="[variant, size]">
    <slot></slot>
  </span>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'default' },
  size: { type: String, default: 'md' }
});
</script>

<style scoped>
.badge {
  display: inline-flex; align-items: center; padding: 0.25em 0.6em;
  font-size: 0.75em; font-weight: 600; border-radius: 9999px;
}
.default { background: #e5e7eb; color: #374151; }
.success { background: #dcfce7; color: #166534; }
.warning { background: #fef3c7; color: #92400e; }
.error { background: #fee2e2; color: #991b1b; }
.info { background: #dbeafe; color: #1e40af; }
.sm { font-size: 0.65em; }
.lg { font-size: 0.85em; }
</style>