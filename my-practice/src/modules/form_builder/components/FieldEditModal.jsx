import React from "react";
import { useFormBuilderStore } from "../stores/useFormBuilderStore";
import { useModal } from "../../../components/modals/modal_manager/ModalContext";
import { MODAL_DATA } from "../../../data/modalData";
import BaseModal from "../../../components/modals/BaseModal";

export default function FieldEditModal({ onClose }) {
  const fields = useFormBuilderStore((state) => state.fields);
  const updateField = useFormBuilderStore((state) => state.updateField);
  const selectedFieldId = useFormBuilderStore((state) => state.selectedFieldId);
  const deselectField = useFormBuilderStore((state) => state.deselectField);
  const { closeModal } = useModal();

  const selectedField = fields.find((field) => field.id === selectedFieldId);
  if (!selectedField) return null;

  function handleClose() {
    deselectField();
    closeModal(MODAL_DATA.FIELD_EDITOR);
  }

  return (
    <BaseModal title="Edit Field" onClose={onClose}>
      <div className="space-y-3">
        <div>
          <label className="block font-medium mb-1">Label</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            value={selectedField.label}
            onChange={(e) =>
              updateField(selectedFieldId, { label: e.target.value })
            }
          />
        </div>
        {selectedField.type === "text" && (
          <div>
            <label className="block font-medium mb-1">Placeholder</label>
            <input
              className="w-full border border-gray-300 rounded p-2"
              value={selectedField.placeholder}
              onChange={(e) =>
                updateField(selectedFieldId, { placeholder: e.target.value })
              }
            />
          </div>
        )}
        <div>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedField.required}
              onChange={(e) =>
                updateField(selectedFieldId, { required: e.target.checked })
              }
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            Required
          </label>
        </div>
      </div>
      <div className="mt-6 text-right">
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:cursor-pointer hover:bg-gray-400"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </BaseModal>
  );
}
