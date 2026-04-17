<template>
  <div class="profile-view">
    <h1>Profile</h1>
    <Card>
      <template #header>User Information</template>
      <div class="profile-header">
        <Avatar :name="user.name" size="lg" />
        <div class="profile-info">
          <h2>{{ user.name }}</h2>
          <p>{{ user.email }}</p>
          <Badge variant="success">{{ user.role }}</Badge>
        </div>
      </div>
      <form @submit.prevent="updateProfile">
        <div class="form-group">
          <label>Name</label>
          <input v-model="form.name" type="text" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="form.email" type="email" />
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input v-model="form.phone" type="tel" />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </Card>
    <Card>
      <template #header>Change Password</template>
      <form @submit.prevent="changePassword">
        <div class="form-group">
          <label>Current Password</label>
          <input v-model="passwordForm.current" type="password" />
        </div>
        <div class="form-group">
          <label>New Password</label>
          <input v-model="passwordForm.new" type="password" />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Avatar from '../components/Avatar.vue';
import Card from '../components/Card.vue';
import Badge from '../components/Badge.vue';

const user = { name: 'Admin User', email: 'admin@example.com', role: 'Administrator' };
const form = reactive({ name: user.name, email: user.email, phone: '' });
const passwordForm = reactive({ current: '', new: '' });

function updateProfile() { console.log('Profile updated:', form); }
function changePassword() { console.log('Password changed'); }
</script>

<style scoped>
.profile-header { display: flex; gap: 1rem; align-items: center; margin-bottom: 1.5rem; }
.profile-info h2 { margin: 0; }
.form-group { margin-bottom: 1rem; }
.form-group label { display: block; margin-bottom: 0.25rem; }
</style>