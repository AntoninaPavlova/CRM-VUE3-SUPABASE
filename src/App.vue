<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="crm-wrapper">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style scoped>
.crm-wrapper {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;

  color: var(--black-color);
  background-color: var(--white-bg-color);

  box-sizing: border-box;
  overflow: hidden;
}
</style>
