<template>
  <div class="input-group">
    <label v-if="label">{{ label }}</label>
    <div class="input-wrapper">
      <span v-if="$slots.prepend" class="prepend"><slot name="prepend"></slot></span>
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="$slots.append" class="append"><slot name="append"></slot></span>
    </div>
    <small v-if="error" class="error">{{ error }}</small>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: [String, Number], default: '' },
  type: { type: String, default: 'text' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  error: { type: String, default: '' }
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.input-group { margin-bottom: 1rem; }
.input-group label { display: block; margin-bottom: 0.25rem; font-weight: 500; }
.input-wrapper { display: flex; border: 1px solid #d1d5db; border-radius: 4px; overflow: hidden; }
input { flex: 1; padding: 0.5rem; border: none; outline: none; }
.prepend, .append { padding: 0.5rem; background: #f3f4f6; }
.error { color: #ef4444; font-size: 0.875rem; }
</style>