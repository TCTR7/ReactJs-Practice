// components/Toast.jsx
import { useToastContext } from "../toasts/ToastContext";
import { X } from "lucide-react";

const typeStyles = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
};

export default function Toast({ toast }) {
  const { removeToast } = useToastContext();

  return (
    <div
      className={`relative border rounded-lg shadow px-4 py-3 flex items-start gap-3 transition-all animate-slide-in-right ${typeStyles[toast.type]}`}
    >
      <div className="flex-1 text-sm">{toast.message}</div>
      <button
        onClick={() => removeToast(toast.id)}
        className="absolute top-2 right-2 text-gray-500 hover:text-black"
      >
        <X size={16} />
      </button>
    </div>
  );
}
