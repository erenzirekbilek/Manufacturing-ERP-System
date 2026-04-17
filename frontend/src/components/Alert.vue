<template>
  <div class="alert" :class="variant">
    <span v-if="icon" class="alert-icon">{{ icon }}</span>
    <div class="alert-content">
      <strong v-if="title">{{ title }}</strong>
      <p><slot></slot></p>
    </div>
    <button v-if="dismissible" @click="$emit('dismiss')" class="alert-close">×</button>
  </div>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'info' },
  title: { type: String, default: '' },
  icon: { type: String, default: '' },
  dismissible: { type: Boolean, default: false }
});
defineEmits(['dismiss']);
</script>

<style scoped>
.alert {
  padding: 1rem; border-radius: 4px; display: flex; gap: 0.75rem; align-items: start;
}
.info { background: #dbeafe; color: #1e40af; }
.success { background: #dcfce7; color: #166534; }
.warning { background: #fef3c7; color: #92400e; }
.error { background: #fee2e2; color: #991b1b; }
.alert-icon { font-size: 1.25rem; }
.alert-content { flex: 1; }
.alert-content strong { display: block; }
.alert-close { background: none; border: none; font-size: 1.25rem; cursor: pointer; }
</style>