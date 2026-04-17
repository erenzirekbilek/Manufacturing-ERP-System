<template>
  <div class="stat-card" :class="variant">
    <div class="stat-title">{{ title }}</div>
    <div class="stat-value">{{ value }}</div>
    <div v-if="change" class="stat-change" :class="change > 0 ? 'positive' : 'negative'">
      {{ change > 0 ? '+' : '' }}{{ change }}%
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  value: { type: [String, Number], required: true },
  change: { type: Number, default: null },
  variant: { type: String, default: 'default' }
});
</script>

<style scoped>
.stat-card {
  padding: 1.5rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.stat-title { font-size: 0.875rem; color: #666; margin-bottom: 0.5rem; }
.stat-value { font-size: 2rem; font-weight: bold; }
.stat-change { font-size: 0.875rem; margin-top: 0.5rem; }
.positive { color: #22c55e; }
.negative { color: #ef4444; }
</style>