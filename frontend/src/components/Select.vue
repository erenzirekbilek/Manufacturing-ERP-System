<template>
  <div class="select-group">
    <label v-if="label">{{ label }}</label>
    <select
      :value="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: [String, Number], default: '' },
  options: { type: Array, required: true },
  label: { type: String, default: '' },
  disabled: { type: Boolean, default: false }
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.select-group { margin-bottom: 1rem; }
.select-group label { display: block; margin-bottom: 0.25rem; font-weight: 500; }
select { width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; }
</style>