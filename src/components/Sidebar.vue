<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => route.path === path;

const menuItems = [
  { path: '/', label: 'Главная' },
  { path: '/departments', label: 'Департаменты' },
  { path: '/employees', label: 'Сотрудники' },
];
</script>

<template>
  <nav class="crm-sidebar">
    <ul class="crm-sidebar__list">
      <li
        v-for="item in menuItems"
        :key="item.path"
        class="crm-sidebar__point"
        :class="{ active: isActive(item.path) }"
      >
        <router-link :to="item.path" class="crm-sidebar__link">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.crm-sidebar {
  max-width: 228px;
  width: 100%;
  min-height: calc(100vh - var(--height-60));
  padding-top: 40px;

  display: flex;
  flex-direction: column;

  background-color: var(--dark-blue-bg-color);
  overflow: hidden;
}

.crm-sidebar__point {
  max-width: 100%;
  width: 100%;
  height: 47px;
  margin: 0 auto;

  color: var(--dark-gray-color);
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
  &:nth-of-type(1) {
    .crm-link {
      font-size: 19px;
    }
  }
  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
  &:hover {
    background-color: var(--white-bg-color);
  }
}

.crm-sidebar__point.active {
  background-color: var(--white-bg-color);
}

.crm-sidebar__link {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: var(--font-size-12);
  text-transform: uppercase;
}

@media (max-width: 991.98px) {
  .crm-sidebar {
    max-width: none;
    width: 100%;
    min-height: auto;
    padding: 20px 0;
  }
}

@media (max-width: 575.98px) {
  .crm-sidebar {
    padding: 0;
  }

  .crm-sidebar__point {
    height: 35px;
  }
}
</style>
