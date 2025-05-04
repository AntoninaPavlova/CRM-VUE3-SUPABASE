<script setup>
import * as Emits from '@/consts/Emits.js';

import { validationMessagesDepartments } from '@/consts/Validation.js';
import { departmentInputs } from '@/consts/DataTableConfig.js';

const props = defineProps({
  department: {
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
    <div class="crm-modal__form-group" v-for="input in departmentInputs" :key="input.field">
      <label :for="input.field" class="crm-modal__label">{{ input.label }}<sup>*</sup></label>
      <FormKit
        v-model="department[input.field]"
        :id="input.field"
        :type="input.isNumber ? 'number' : input.type"
        :name="input.field"
        class="crm-modal__input"
        required
        @change="updateValue(input.field, $event.target.value)"
        :validation="input.validation"
        :validationMessages="validationMessagesDepartments[input.field]"
      />
    </div>
  </div>
</template>
