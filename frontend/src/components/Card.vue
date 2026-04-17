<template>
  <div class="card" :class="{ bordered, shadowed }">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  bordered: { type: Boolean, default: false },
  shadowed: { type: Boolean, default: true }
});
</script>

<style scoped>
.card { background: white; border-radius: 8px; overflow: hidden; }
.bordered { border: 1px solid #e5e7eb; }
.shadowed { box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.card-header, .card-footer { padding: 1rem; border-top: 1px solid #e5e7eb; }
.card-body { padding: 1rem; }
</style>