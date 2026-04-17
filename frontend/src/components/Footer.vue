<template>
  <footer class="footer">
    <p>&copy; {{ year }} Manufacturing ERP. All rights reserved.</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.footer {
  padding: 1rem; text-align: center; background: #f3f4f6;
  border-top: 1px solid #e5e7eb; margin-top: auto;
}
</style>