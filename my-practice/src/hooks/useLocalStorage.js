import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key “" + key + "”: ", error);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageValue));
  }, [key, storageValue]);
  return [storageValue, setStorageValue];
}
