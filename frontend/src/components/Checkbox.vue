<template>
  <label class="checkbox">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script setup>
defineProps({ modelValue: { type: Boolean, default: false }, label: { type: String, default: '' } });
defineEmits(['update:modelValue']);
</script>

<style scoped>
.checkbox { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
</style>