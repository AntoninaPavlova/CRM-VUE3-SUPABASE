import { useToast } from 'vue-toastification';

const toast = useToast();

export const showErrorToast = (message) => {
  toast.error(message);
};

export const showSuccessToast = (message) => {
  toast.success(message);
};
