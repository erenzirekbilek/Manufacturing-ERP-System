<template>
  <header class="header">
    <div class="header-left">
      <slot name="left"></slot>
    </div>
    <div class="header-center">
      <slot name="center"></slot>
    </div>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 0.75rem 1.5rem; background: white;
  border-bottom: 1px solid #e5e7eb;
}
</style>