<template>
  <div class="tabs">
    <div class="tabs-nav">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        :class="{ active: modelValue === tab.value }"
        @click="$emit('update:modelValue', tab.value)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: { type: String, required: true },
  tabs: { type: Array, required: true }
});
defineEmits(['update:modelValue']);
</script>

<style scoped>
.tabs-nav { display: flex; border-bottom: 1px solid #e5e7eb; }
.tabs-nav button {
  padding: 0.75rem 1.5rem; background: none; border: none;
  cursor: pointer; border-bottom: 2px solid transparent;
}
.tabs-nav button.active { border-bottom-color: #3b82f6; color: #3b82f6; }
.tabs-content { padding: 1rem 0; }
</style>