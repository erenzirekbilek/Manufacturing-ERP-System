<template>
  <label class="radio">
    <input
      type="radio"
      :checked="modelValue === value"
      :value="value"
      :name="name"
      @change="$emit('update:modelValue', value)"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script setup>
defineProps({
  modelValue: { type: [String, Number], default: '' },
  value: { type: [String, Number], required: true },
  label: { type: String, default: '' },
  name: { type: String, default: '' }
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.radio { display: flex; align-items: center; gap: 0.5rem; cursor: pointer; }
</style>