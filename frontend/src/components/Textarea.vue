<template>
  <div class="textarea-group">
    <label v-if="label">{{ label }}</label>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <small v-if="hint">{{ hint }}</small>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  rows: { type: Number, default: 3 },
  disabled: { type: Boolean, default: false },
  hint: { type: String, default: '' }
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.textarea-group { margin-bottom: 1rem; }
.textarea-group label { display: block; margin-bottom: 0.25rem; font-weight: 500; }
textarea { width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 4px; }
small { color: #6b7280; }
</style>