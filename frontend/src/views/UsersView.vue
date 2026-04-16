<template>
  <div class="users-view">
    <h1>Users</h1>
    <button @click="showForm = !showForm">
      {{ showForm ? 'Close Form' : 'Add User' }}
    </button>
    <UserForm v-if="showForm" @saved="onSaved" />
    <UserList @edit="editUser" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UserList from '../components/UserList.vue';
import UserForm from '../components/UserForm.vue';

const showForm = ref(false);
const editId = ref(null);

const onSaved = () => {
  showForm.value = false;
};

const editUser = (id) => {
  editId.value = id;
  showForm.value = true;
};
</script>