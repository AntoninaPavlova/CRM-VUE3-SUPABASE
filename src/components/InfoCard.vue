<script setup>
import Button from '@/components/Button.vue';

const props = defineProps({
  employee: {
    type: Object,
    required: true,
  },
  department: {
    type: Object,
    required: true,
  },
  onClickEdit: Function,
  onClickGoBack: Function,
});
</script>

<template>
  <div class="crm-info">
    <div class="crm-info__coll">
      <div v-if="department" class="crm-info__item">
        <p class="crm-info__text crm-info__name">{{ department.name }}</p>
        <p class="crm-info__text crm-info__description">{{ department.description }}</p>
        <p class="crm-info__text crm-info__number"><strong>Число сотрудников:</strong> {{ department.number }}</p>
        <p class="crm-info__text crm-info__head"><strong>Заведующий:</strong> {{ department.head }}</p>
      </div>

      <div v-else class="crm-info__item">
        <p class="crm-info__text crm-info__name">{{ employee.firstName }} {{ employee.lastName }}</p>
        <p class="crm-info__text crm-info__age"><strong>Возраст:</strong> {{ employee.age }}</p>
        <p class="crm-info__text crm-info__department"><strong>Департамент: </strong>{{ employee.department }}</p>
        <p class="crm-info__text crm-info__technologies"><strong>Технологии:</strong> {{ employee.technologies }}</p>
      </div>

      <div class="crm-info__item">
        <Button :onClick="onClickEdit" icon="/assets/img/edit.png" />
      </div>
    </div>
  </div>

  <Button :onClick="onClickGoBack" icon="/assets/img/back.png" />
</template>

<style scoped>
.crm-info {
  position: relative;
  margin: var(--margin-15);
  padding: var(--padding-20);

  background-color: var(--light-gray-bg-color);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:before {
    position: absolute;
    top: 0;
    left: 0;

    width: 10px;
    height: 100%;
    display: inline-block;

    content: '';
    background-color: var(--pearch-bg-color);

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
}

.crm-info__coll {
  margin-left: 15px;

  display: grid;
  grid-template-columns: 90% 10%;
}

.crm-info__item {
  &:nth-last-of-type(1) {
    justify-self: flex-end;
  }
}

.crm-info__name {
  font-weight: bold;
}

.crm-info__text {
  padding: 10px 0;
  font-size: var(--font-size-16);
  line-height: 1.2;

  color: var(--dark-gray-color);
}
</style>
