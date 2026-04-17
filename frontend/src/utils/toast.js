import { reactive } from 'vue';

const state = reactive({
  messages: []
});

let id = 0;

export function toast(message, type = 'info', duration = 3000) {
  const msg = { id: ++id, message, type };
  state.messages.push(msg);
  setTimeout(() => removeToast(msg.id), duration);
  return msg.id;
}

export function removeToast(id) {
  const idx = state.messages.findIndex(m => m.id === id);
  if (idx !== -1) state.messages.splice(idx, 1);
}

export function useToast() {
  return { toast, removeToast, messages: state.messages };
}

export default { toast, removeToast, useToast };