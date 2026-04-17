<template>
  <Teleport to="body">
    <div v-if="show" class="confirm-overlay" @click.self="cancel">
      <div class="confirm-dialog">
        <h3>{{ title }}</h3>
        <p>{{ message }}</p>
        <div class="confirm-actions">
          <button @click="cancel" class="btn-cancel">{{ cancelText }}</button>
          <button @click="confirm" class="btn-confirm">{{ confirmText }}</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  show: { type: Boolean, default: false },
  title: { type: String, default: 'Confirm' },
  message: { type: String, default: 'Are you sure?' },
  confirmText: { type: String, default: 'Confirm' },
  cancelText: { type: String, default: 'Cancel' }
});

const emit = defineEmits(['confirm', 'cancel']);

function confirm() { emit('confirm'); }
function cancel() { emit('cancel'); }
</script>

<style scoped>
.confirm-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center; z-index: 1000;
}
.confirm-dialog {
  background: white; padding: 1.5rem; border-radius: 8px; min-width: 300px;
}
.confirm-actions { display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem; }
button { padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; }
.btn-cancel { background: #e5e5e5; }
.btn-confirm { background: #3b82f6; color: white; }
</style>