<script setup>
import { useAppStore } from '@/store/store.js';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const appStore = useAppStore();

const buttonText = computed(() => {
  switch (route.path) {
    case '/departments':
      return 'Добавить департамент';
    case '/employees':
      return 'Добавить сотрудника';
    case '/':
      return 'Лого';
    default:
      return 'Лого';
  }
});

const isButtonDisabled = computed(() => {
  return buttonText.value === 'Лого';
});

const onClickCreate = () => {
  if (!isButtonDisabled.value) {
    appStore.openCreateModal();
  }
};
</script>

<template>
  <header class="crm-header">
    <div class="crm-header__menu">
      <button type="button" @click="onClickCreate" class="crm-header__btn" :disabled="isButtonDisabled">
        {{ buttonText }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.crm-header {
  height: var(--height-60);
  padding: 20px 25px 20px;

  display: flex;
  align-items: center;

  background-color: var(--dark-blue-bg-color);
}

.crm-header__menu {
  width: 100%;
  text-align: right;
}

.crm-header__btn {
  max-width: 160px;
  width: 100%;
  height: 35px;

  color: var(--white-color);
  font-size: var(--font-size-12);
  font-weight: 500;
  border-radius: 20px;
  background-color: var(--green-bg-color);
  cursor: pointer;
}

@media (max-width: 575.99px) {
  .crm-header__menu {
    text-align: center;
  }

  .crm-header__btn {
    height: var(--height-28);
    padding: 0 10px;
  }
}
</style>
