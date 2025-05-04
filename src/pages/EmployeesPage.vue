<script setup>
import { useAppStore } from '@/store/store.js';
import { useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import DataTable from '@/components/DataTable.vue';
import { employeeColumns } from '@/consts/DataTableConfig.js';

const appStore = useAppStore();
const router = useRouter();


onMounted(async () => {
  await appStore.fetchEmployees();
});

const paginationOptions = {
  enabled: true,
  perPage: 10,
};

const employees = computed(() => appStore.employees);

const onClickDetails = (id) => {
  router.push(`/employees/${id}`);
};

const onClickEdit = (row) => {
  appStore.selectedEmployee = { ...row };
  appStore.openEditModal();
};

const onClickDelete = async (id) => {
  await appStore.deleteEmployee(id);
};
</script>

<template>
  <div class="crm-container">
    <Header />
    <Main>
      <DataTable
        :columns="employeeColumns"
        :rows="employees"
        :pagination-options="paginationOptions"
        :onClickEdit="onClickEdit"
        :onClickDelete="onClickDelete"
        :onClickDetails="onClickDetails"
      />
    </Main>
  </div>
</template>
