// hooks/useToast.js
import { useToastContext } from "../components/toasts/ToastContext";

export function useToast() {
  const { addToast } = useToastContext();

  return {
    showSuccess: (msg, duration) =>
      addToast({ type: "success", message: msg, duration }),
    showError: (msg, duration) =>
      addToast({ type: "error", message: msg, duration }),
    showInfo: (msg, duration) =>
      addToast({ type: "info", message: msg, duration }),
    showWarning: (msg, duration) =>
      addToast({ type: "warning", message: msg, duration }),
  };
}
