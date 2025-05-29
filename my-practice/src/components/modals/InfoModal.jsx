import BaseModal from "./BaseModal";

// components/modals/InfoModal.jsx
export default function InfoModal({ message, onClose }) {
  return (
    <BaseModal title="Information" onClose={onClose}>
        <p className="mb-6">{message}</p>
        <div className="text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Close
          </button>
        </div>
    </BaseModal>
  );
}
