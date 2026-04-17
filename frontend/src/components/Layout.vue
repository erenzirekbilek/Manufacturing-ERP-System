<template>
  <div class="layout">
    <Sidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed" />
    <div class="layout-main">
      <Header>
        <template #left>
          <button @click="sidebarCollapsed = !sidebarCollapsed">☰</button>
        </template>
        <template #center>
          <SearchBar placeholder="Search..." @search="handleSearch" />
        </template>
        <template #right>
          <Avatar name="Admin User" />
        </template>
      </Header>
      <main class="layout-content">
        <slot></slot>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import SearchBar from './SearchBar.vue';
import Avatar from './Avatar.vue';

const sidebarCollapsed = ref(false);
function handleSearch(q) { console.log('Search:', q); }
</script>

<style scoped>
.layout { display: flex; min-height: 100vh; }
.layout-main { flex: 1; display: flex; flex-direction: column; }
.layout-content { flex: 1; padding: 1.5rem; background: #f9fafb; }
</style>