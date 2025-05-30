// ToastContext.js
import { createContext, useContext, useState, useCallback } from "react";
import ToastContainer from "./ToastContainer";

const ToastContext = createContext();
let toastIdCounter = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({type = "info", message, duration = 3000}) => {
    const id = toastIdCounter++;
    if (!message) {
      return;
    }
    const newToast = { id, type, message };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast}/>
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  return useContext(ToastContext);
}
