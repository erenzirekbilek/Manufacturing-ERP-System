<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
}
</style>