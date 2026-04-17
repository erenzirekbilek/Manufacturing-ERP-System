<template>
  <div class="slider">
    <input
      type="range"
      :min="min"
      :max="max"
      :value="modelValue"
      :step="step"
      @input="$emit('update:modelValue', parseFloat($event.target.value))"
    />
    <span class="slider-value">{{ modelValue }}</span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: Number, default: 0 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 }
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.slider { display: flex; align-items: center; gap: 1rem; }
input[type="range"] { flex: 1; }
</style>