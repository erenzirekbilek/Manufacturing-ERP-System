<template>
  <div class="user-form">
    <h2>{{ isEdit ? 'Edit User' : 'Add User' }}</h2>
    <form @submit.prevent="submitForm">
      <input v-model="user.firstName" placeholder="First Name" required />
      <input v-model="user.lastName" placeholder="Last Name" required />
      <input v-model="user.email" type="email" placeholder="Email" required />
      <input v-model="user.password" type="password" placeholder="Password" />
      <input v-model="user.phone" placeholder="Phone" />
      <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import UserService from '../services/UserService';

const props = defineProps({ userId: Number });
const emit = defineEmits(['saved']);

const user = ref({ firstName: '', lastName: '', email: '', password: '', phone: '' });
const isEdit = ref(false);

const submitForm = async () => {
  try {
    if (isEdit.value) {
      await UserService.update(props.userId, user.value);
    } else {
      await UserService.create(user.value);
    }
    emit('saved');
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  if (props.userId) {
    isEdit.value = true;
    const response = await UserService.get(props.userId);
    user.value = response.data;
  }
});
</script>