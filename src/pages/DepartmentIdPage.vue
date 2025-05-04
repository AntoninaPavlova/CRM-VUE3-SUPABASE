<script setup>
import { useAppStore } from '@/store/store.js';
import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import InfoCard from '@/components/InfoCard.vue';

const { params } = useRoute();
const appStore = useAppStore();

const department = computed(() => appStore.openedDepartment);

onMounted(async () => {
  await appStore.fetchDepartmentById(params.id);
});

const onClickEdit = () => {
  if (department.value) {
    appStore.selectedDepartment = { ...department.value };
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
      <InfoCard v-if="department" :onClickEdit="onClickEdit" :onClickGoBack="onClickGoBack" :department="department" />
      <p v-else class="crm-loading">Загрузка данных о департаменте...</p>
    </Main>
  </div>
</template>
