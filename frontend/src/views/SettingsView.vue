<template>
  <div class="settings-view">
    <h1>Settings</h1>
    <Tabs v-model="activeTab" :tabs="tabs">
      <div v-if="activeTab === 'general'">
        <Card>
          <template #header>General Settings</template>
          <form @submit.prevent="saveSettings">
            <div class="form-group">
              <label>Company Name</label>
              <input v-model="settings.companyName" type="text" />
            </div>
            <div class="form-group">
              <label>Currency</label>
              <select v-model="settings.currency">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
              </select>
            </div>
            <div class="form-group">
              <label>Language</label>
              <select v-model="settings.language">
                <option value="en">English</option>
                <option value="tr">Turkish</option>
              </select>
            </div>
            <button type="submit">Save</button>
          </form>
        </Card>
      </div>
      <div v-if="activeTab === 'notifications'">
        <Card>
          <template #header>Notification Preferences</template>
          <label><input type="checkbox" v-model="settings.emailNotifications" /> Email Notifications</label>
          <label><input type="checkbox" v-model="settings.pushNotifications" /> Push Notifications</label>
        </Card>
      </div>
    </Tabs>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Tabs from '../components/Tabs.vue';
import Card from '../components/Card.vue';

const activeTab = ref('general');
const tabs = [
  { label: 'General', value: 'general' },
  { label: 'Notifications', value: 'notifications' }
];

const settings = reactive({
  companyName: 'Manufacturing ERP',
  currency: 'USD',
  language: 'en',
  emailNotifications: true,
  pushNotifications: false
});

function saveSettings() {
  console.log('Settings saved:', settings);
}
</script>

<style scoped>
.form-group { margin-bottom: 1rem; }
.form-group label { display: block; margin-bottom: 0.25rem; }
</style>