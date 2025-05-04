<script setup>
import { useAppStore } from '@/store/store.js';
import { useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import DataTable from '@/components/DataTable.vue';
import { departmentColumns } from '@/consts/DataTableConfig.js';

const appStore = useAppStore();
const router = useRouter();

onMounted(async () => {
  await appStore.fetchDepartments();
});

const paginationOptions = {
  enabled: true,
  perPage: 10,
};

const departments = computed(() => appStore.departments);

const onClickDetails = (id) => {
  router.push(`/departments/${id}`);
};

const onClickEdit = (row) => {
  appStore.selectedDepartment = { ...row };
  appStore.openEditModal();
};

const onClickDelete = async (id) => {
  await appStore.deleteDepartment(id);
};

const truncateDescription = (description) => {
  if (typeof description === 'string') {
    return description.length > 18 ? description.substring(0, 18) + ' ...' : description;
  }

  return '';
};
</script>

<template>
  <div class="crm-container">
    <Header />
    <Main>
      <DataTable
        :columns="departmentColumns"
        :rows="departments"
        :pagination-options="paginationOptions"
        :onClickEdit="onClickEdit"
        :onClickDelete="onClickDelete"
        :onClickDetails="onClickDetails"
        :truncateDescription="truncateDescription"
      />
    </Main>
  </div>
</template>
