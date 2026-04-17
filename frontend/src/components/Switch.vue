<template>
  <label class="switch">
    <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" />
    <span class="switch-slider"></span>
  </label>
</template>

<script setup>
defineProps({ modelValue: { type: Boolean, default: false } });
defineEmits(['update:modelValue']);
</script>

<style scoped>
.switch { position: relative; display: inline-block; width: 48px; height: 24px; }
.switch input { opacity: 0; width: 0; height: 0; }
.switch-slider { position: absolute; cursor: pointer; inset: 0; background: #ccc; border-radius: 24px; transition: 0.3s; }
.switch-slider::before { content: ''; position: absolute; height: 18px; width: 18px; left: 3px; bottom: 3px; background: white; border-radius: 50%; transition: 0.3s; }
.switch input:checked + .switch-slider { background: #3b82f6; }
.switch input:checked + .switch-slider::before { transform: translateX(24px); }
</style>