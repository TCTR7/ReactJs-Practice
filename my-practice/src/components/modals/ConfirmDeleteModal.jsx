import BaseModal from "./BaseModal";

export default function ConfirmDeleteModal({ onConfirm, onClose, message }) {
  function handleConfirm() {
    onConfirm();
    onClose();
  }
  return (
    <BaseModal title="Confirm Delete" onClose={onClose}>
        <h2 className="font-semibold mb-4 text-red-600">Confirm Delete</h2>
        <p className="mb-6">
          <strong>{message}</strong>
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Hủy
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Xóa
          </button>
        </div>
    </BaseModal>
  );
}
