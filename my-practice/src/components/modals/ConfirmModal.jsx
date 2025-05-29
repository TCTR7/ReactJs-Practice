import BaseModal from "./BaseModal";

export default function ConfirmModal({ message, onClose, onConfirm }) {
  const handleOK = () => {
    onConfirm();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <BaseModal title="Confirm Action" onClose={onClose}>
      <p className="mb-4">{message}</p>
      <div className="flex justify-end gap-3">
        <button
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          onClick={handleOK}
        >
          OK
        </button>
      </div>
    </BaseModal>
  );
}
