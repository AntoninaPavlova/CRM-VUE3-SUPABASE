<script setup>
import { computed } from 'vue';

import { useAppStore } from '@/store/store.js';
import FormAction from '@/components/Form/FormAction.vue';

const appStore = useAppStore();

const isCreating = computed(() => appStore.isCreateModalOpen);
const isEditing = computed(() => appStore.isEditModalOpen);

const onClickCloseModal = () => {
  appStore.closeModal();
};
</script>

<template>
  <!-- Main modal -->
  <div class="crm-modal">
    <!-- Modal content -->
    <div class="crm-modal__content">
      <!-- Modal header -->
      <div class="crm-modal__header">
        <div class="crm-modal__title">
          <h3 class="crm-modal__title-text">Данные:</h3>
        </div>
      </div>

      <!-- Modal body -->
      <div class="crm-modal__body">
        <FormAction v-if="isCreating || isEditing" />
      </div>

      <!-- Modal footer -->
      <div class="crm-modal__footer">
        <button @click="onClickCloseModal" class="crm-modal__close-button">
          <img class="crm-modal__close-icon" src="@/assets/img/close.png" alt="close" width="15" height="15" />
        </button>
      </div>
    </div>
  </div>

  <div class="crm-bg"></div>
</template>

<style scoped>
.crm-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  max-width: 448px;
  width: 100%;
}

.crm-modal__content {
  background-color: var(--white-bg-color);
  box-shadow: 0 4px 6px var(--black-color);
}

.crm-modal__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--light-gray-color);
  background-color: var(--pearch-bg-color);
}

.crm-modal__title-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--blue-color);
}

.crm-modal__title-highlight {
  font-size: var(--font-size-12);
  color: var(--lilac-color);
  text-transform: uppercase;
}

.crm-modal__form {
  margin-bottom: 16px;
  padding: var(--padding-20);
}

.crm-modal__close-button {
  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
}

.crm-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  background-color: var(--dark-gray-bg-color);
  opacity: 0.6;
}

@media (max-width: 575.99px) {
  .crm-modal {
    width: calc(100% - 20px);
  }
}
</style>
