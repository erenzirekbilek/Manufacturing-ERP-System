<template>
  <Teleport to="body">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal">
        <header>
          <slot name="header">Modal</slot>
          <button class="close-btn" @click="$emit('close')">×</button>
        </header>
        <div class="modal-body">
          <slot></slot>
        </div>
        <footer v-if="$slots.footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({ show: { type: Boolean, default: false } });
defineEmits(['close']);
</script>

<style scoped>
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
}
.modal {
  background: white; border-radius: 8px; min-width: 400px; max-width: 90%;
}
header {
  display: flex; justify-content: space-between; padding: 1rem;
  border-bottom: 1px solid #eee;
}
.close-btn { background: none; border: none; font-size: 1.5rem; cursor: pointer; }
.modal-body { padding: 1rem; }
footer { padding: 1rem; border-top: 1px solid #eee; }
</style>