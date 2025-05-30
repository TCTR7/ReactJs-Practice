// pages/ToastDemoPage.jsx
import { useToast } from "../hooks/useToast";

export default function ToastDemoPage() {
  const { showSuccess, showError, showInfo, showWarning } = useToast();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">🔔 Toast Notification Demo</h1>
      <div className="space-x-2">
        <button
          onClick={() =>
            showSuccess(
              "Thành công rồi! Bạn đã thực hiện thành công!",
            )
          }
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Success
        </button>
        <button
          onClick={() => showError("Lỗi xảy ra!")}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Error
        </button>
        <button
          onClick={() => showInfo("Đây là thông tin")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Info
        </button>
        <button
          onClick={() => showWarning("Cảnh báo!")}
          className="bg-yellow-500 text-black px-4 py-2 rounded"
        >
          Warning
        </button>
      </div>
    </div>
  );
}
