import { toast } from "react-toastify";

export const getStoredData = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const addToStorage = (key, value) => {
  const storedValue = getStoredData(key);
  const isExist = storedValue.some((item) => item.id === value.id);

  if (isExist) {
    toast.warn(`This item has already been added to your ${key}.`, {
      autoClose: 2000,
    });
    return;
  }

  storedValue.push(value);
  localStorage.setItem(key, JSON.stringify(storedValue));
  toast.success(`The item has been added to your ${key}.`, {
    autoClose: 2000,
  });
};

export const removeFromStorage = (key, id) => {
  let storedValue = getStoredData(key);
  const updatedValue = storedValue.filter((item) => item.id !== id);
  storedValue = [...updatedValue];
  localStorage.setItem(key, JSON.stringify(storedValue));
  toast.warn(`The item has been removed from your ${key}.`, {
    autoClose: 2000,
  });
};
