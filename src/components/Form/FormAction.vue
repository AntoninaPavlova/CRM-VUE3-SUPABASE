как улучшить?

<script setup>
import { useAppStore } from '@/store/store.js';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import FormDepartment from '@/components/Form/FormDepartment.vue';
import FormEmployee from '@/components/Form/FormEmployee.vue';
import Button from '@/components/Button.vue';

const appStore = useAppStore();
const route = useRoute();

const isDepartmentPage = computed(() => route.path === '/departments' || route.path.startsWith('/departments/'));

const department = computed(() => appStore.selectedDepartment || appStore.newDepartment);
const employee = computed(() => appStore.selectedEmployee || appStore.newEmployee);

const isCreating = computed(() => appStore.isCreateModalOpen);
const isEditing = computed(() => appStore.isEditModalOpen);

const onClickSaveChanges = async () => {
  if (isDepartmentPage.value) {
    if (isCreating.value) {
      await appStore.createDepartment();
    } else {
      await appStore.saveDepartment();
    }
  } else {
    if (isCreating.value) {
      await appStore.createEmployee();
    } else {
      await appStore.saveEmployee();
    }
  }
};
</script>

<template>
  <form @submit.prevent="onClickSaveChanges" class="crm-modal__form">
    <FormDepartment v-if="isDepartmentPage && isCreating" :department="department" />
    <FormDepartment v-if="isDepartmentPage && isEditing" :department="department" />
    <FormEmployee v-else-if="!isDepartmentPage && isCreating" :employee="employee" />
    <FormEmployee v-else-if="!isDepartmentPage && isEditing" :employee="employee" />

    <Button type="submit" buttonClass="button--save" text="Сохранить" />
  </form>
</template>
