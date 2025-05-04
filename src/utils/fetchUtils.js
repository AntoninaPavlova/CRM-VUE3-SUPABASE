import { showErrorToast, showSuccessToast } from '@/utils/toast.js';

export async function fetchData(fetchFunction, successMessage, errorMessage, storeKey, store) {
  try {
    const data = await fetchFunction();
    store[storeKey] = data.sort((a, b) => a.id - b.id);
    showSuccessToast(successMessage);
  } catch (error) {
    showErrorToast(errorMessage);
  }
}

export async function fetchDataById(fetchByIdFunction, id, successMessage, errorMessage, storeKey, store) {
  try {
    const data = await fetchByIdFunction(id);
    store[storeKey] = data;
    showSuccessToast(successMessage);
  } catch (error) {
    showErrorToast(errorMessage);
  }
}

export async function deleteData(deleteFunction, id, successMessage, errorMessage, storeKey, store) {
  try {
    await deleteFunction(id);
    store[storeKey] = store[storeKey].filter((item) => item.id !== id);
    showSuccessToast(successMessage);
  } catch (error) {
    showErrorToast(errorMessage);
  }
}

export async function createData(
  createFunction,
  newData,
  fetchFunction,
  successMessage,
  errorMessage,
  storeKey,
  store
) {
  try {
    await createFunction(newData);
    const allData = await fetchFunction();
    store[storeKey] = allData;
    store.closeModal();
    showSuccessToast(successMessage);
  } catch (error) {
    showErrorToast(errorMessage);
  }
}

export async function updateData(
  updateFunction,
  id,
  updatedData,
  storeKey,
  openedStoreKey,
  successMessage,
  errorMessage,
  store
) {
  try {
    const updatedItems = await updateFunction(id, updatedData);

    if (Array.isArray(updatedItems) && updatedItems.length > 0) {
      const updatedItem = updatedItems[0];

      const index = store[storeKey].findIndex((item) => item.id === updatedItem.id);
      if (index !== -1) {
        store[storeKey][index] = { ...store[storeKey][index], ...updatedItem };
      }

      store[openedStoreKey] = { ...updatedItem };
      store.closeModal();
      showSuccessToast(successMessage);
    }
  } catch (error) {
    showErrorToast(errorMessage);
  }
}
