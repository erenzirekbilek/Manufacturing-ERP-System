<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { store } from '../stores/counter';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = () => {
  store.login({ email: email.value });
  router.push('/');
};
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
}
.login input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
.login button {
  width: 100%;
  padding: 10px;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;
}
</style>