<script setup>
import { useAppStore } from '@/store/store.js';
import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import InfoCard from '@/components/InfoCard.vue';

const { params } = useRoute();
const appStore = useAppStore();

const employee = computed(() => appStore.openedEmployee);

onMounted(async () => {
  await appStore.fetchEmployeeById(params.id);
});

const onClickEdit = () => {
  if (employee.value) {
    appStore.selectedEmployee = { ...employee.value };
    appStore.openEditModal();
  }
};

const onClickGoBack = () => {
  window.history.back();
};
</script>

<template>
  <div class="crm-container">
    <Header />
    <Main>
      <InfoCard v-if="employee" :onClickEdit="onClickEdit" :onClickGoBack="onClickGoBack" :employee="employee" />
      <p v-else class="crm-loading">Загрузка данных о сотруднике...</p>
    </Main>
  </div>
</template>
