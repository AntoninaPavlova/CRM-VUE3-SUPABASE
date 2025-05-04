<script setup>
import * as Emits from '@/consts/Emits.js';

import { validationMessagesEmployees } from '@/consts/Validation.js';
import { employeeInputs } from '@/consts/DataTableConfig.js';

const props = defineProps({
  employee: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits([Emits.UPDATE_VALUE]);

const updateValue = (field, newValue) => {
  emit(Emits.UPDATE_VALUE, { field, value: newValue });
};
</script>

<template>
  <div class="crm-modal__form-groups">
    <div class="crm-modal__form-group" v-for="input in employeeInputs" :key="input.field">
      <label :for="input.fieldel" class="crm-modal__label">{{ input.label }}<sup>*</sup></label>
      <FormKit
        v-model="employee[input.field]"
        :id="input.field"
        :type="input.isNumber ? 'number' : input.type"
        :name="input.field"
        class="crm-modal__input"
        required
        @change="updateValue(input.field, $event.target.value)"
        :validation="input.validation"
        :validationMessages="validationMessagesEmployees[input.field]"
      />
    </div>
  </div>
</template>
