<script setup>
import { useAppStore } from '@/store/store.js';
import { computed } from 'vue';

import Sidebar from '@/components/Sidebar.vue';
import ModalWindow from '@/components/ModalWindow.vue';

const appStore = useAppStore();

const isCreating = computed(() => appStore.isCreateModalOpen);
const isEditing = computed(() => appStore.isEditModalOpen);


const modalType = computed(() => {
  return isCreating.value ? 'create' : isEditing.value ? 'edit' : null;
});
</script>

<template>
  <main class="crm-main">
    <div class="crm-content">
      <Sidebar />
      <div class="crm-details">
        <slot></slot>
      </div>
    </div>

    <ModalWindow v-if="modalType" :type="modalType" />
  </main>
</template>

<style scoped>
.crm-container {
  position: relative;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
}

.crm-content {
  display: flex;
  flex-direction: row;
}

.crm-details {
  width: 100%;
  padding: var(--padding-20);
}

@media (max-width: 991.98px) {
  .crm-content {
    flex-direction: column;
  }
}
</style>
