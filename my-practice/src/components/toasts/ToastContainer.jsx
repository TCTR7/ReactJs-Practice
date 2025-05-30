// components/ToastContainer.jsx
export default function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm">
      <div
        className="flex flex-col gap-3 max-h-[70vh] overflow-y-auto p-1 toast-scroll"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#9ca3af #f3f4f6" }}
      >
        <style>
          {`
            .toast-scroll::-webkit-scrollbar {
              width: 6px;
            }
            .toast-scroll::-webkit-scrollbar-track {
              background: #f1f5f9;
              border-radius: 3px;
            }
            .toast-scroll::-webkit-scrollbar-thumb {
              background: #cbd5e1;
              border-radius: 3px;
            }
            .toast-scroll::-webkit-scrollbar-thumb:hover {
              background: #94a3b8;
            }
          `}
        </style>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`relative px-4 py-3 pr-10 text-white flex items-start rounded-lg shadow-md
              transition-all duration-300 animate-fade-in-down
              ${toast.type === "success" && "bg-green-500"}
              ${toast.type === "error" && "bg-red-500"}
              ${toast.type === "info" && "bg-blue-500"}
              ${toast.type === "warning" && "bg-yellow-500 text-yellow-900"}`}
          >
            <span className="text-sm flex-1 break-words whitespace-nowrap truncate">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className={`absolute top-3 right-3 font-bold hover:scale-125 
                transition-transform duration-200 flex-shrink-0
                ${toast.type === "warning" ? "text-yellow-900" : "text-white"}`}
              aria-label="Close toast"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
