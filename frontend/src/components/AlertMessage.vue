<template>
  <div :class="['alert', type]">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: String,
  type: { type: String, default: 'info' }
});
</script>

<style scoped>
.alert {
  padding: 15px;
  border-radius: 4px;
  margin: 10px 0;
}
.alert.success { background: #d4edda; color: #155724; }
.alert.error { background: #f8d7da; color: #721c24; }
.alert.info { background: #d1ecf1; color: #0c5460; }
</style>