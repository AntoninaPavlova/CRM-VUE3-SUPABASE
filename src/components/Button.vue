<script setup>
const props = defineProps({
  onClick: {
    type: Function,
    required: true,
  },
  buttonClass: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
});

const emit = defineEmits();

const handleClick = (event) => {
  emit('click', event);
};
</script>

<template>
  <button @click="handleClick" :class="['crm-button', buttonClass]" type="button">
    <img v-if="icon" :src="icon" alt="button icon" width="23" height="23" />
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<style scoped>
.crm-button {
  margin: var(--margin-15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button--save {
  max-width: 160px;
  width: 100%;
  height: 35px;
  margin: 0 auto;

  color: var(--black-color);
  font-size: var(--font-size-16);
  font-weight: 500;
  text-align: center;

  border-radius: 20px;
  background-color: var(--pearch-bg-color);
  cursor: pointer;
}
</style>
