<template>
  <div class="user-list">
    <h2>Users</h2>
    <button @click="fetchUsers">Refresh</button>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
        <button @click="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import UserService from '../services/UserService';

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await UserService.getAll();
    users.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id) => {
  try {
    await UserService.delete(id);
    fetchUsers();
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchUsers);
</script>