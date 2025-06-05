import React, { useState } from "react";
import { useFormBuilderStore } from "../../stores/useFormBuilderStore";
import { useModal } from "../../../../components/modals/modal_manager/ModalContext";
import { MODAL_DATA } from "../../../../data/modalData";
import BaseModal from "../../../../components/modals/BaseModal";
import TextModalItem from "./modal_items/TextModalItem";
import SelectModalItem from "./modal_items/SelectModalItem";
import CheckBoxModalItem from "./modal_items/CheckBoxModalItem";
import LabelModalItem from "./modal_items/LabelModalItem";

export default function FieldEditModal({ onClose }) {
  const fields = useFormBuilderStore((state) => state.fields);
  const updateField = useFormBuilderStore((state) => state.updateField);
  const selectedFieldId = useFormBuilderStore((state) => state.selectedFieldId);
  const deselectField = useFormBuilderStore((state) => state.deselectField);
  const { closeModal } = useModal();

  const selectedField = fields.find((field) => field.id === selectedFieldId);

  const [labelModalItemValue, setLabelModalItemValue] = useState(
    selectedField ? selectedField.placeholder : ""
  );
  const [textModalItemValue, setTextModalItemValue] = useState(
    selectedField ? selectedField.placeholder : ""
  );
  const [selectModalItemOptionValue, setSelectModalItemOptionValue] = useState(
    selectedField ? selectedField.options || [] : []
  );
  const [checkboxModalItemValue, setCheckboxModalItemValue] = useState(
    selectedField ? selectedField.required || false : false
  );

  if (!selectedField) return null;

  function handleSave() {
    const newField = {};
    if (selectModalItemOptionValue) {
      newField.options = selectModalItemOptionValue.map((line) => line.trim()).filter(Boolean);
    }
    if (labelModalItemValue) {
      newField.label = labelModalItemValue;
    }
    if (textModalItemValue) {
      newField.placeholder = textModalItemValue;
    }
    if (checkboxModalItemValue) {
      newField.required = checkboxModalItemValue;
    }
    updateField(selectedFieldId, newField);
    handleClose();
  }

  function handleClose() {
    deselectField();
    closeModal(MODAL_DATA.FIELD_EDITOR);
  }

  return (
    <BaseModal title="Edit Field" onClose={onClose}>
      <div className="space-y-3">
        <LabelModalItem
          value={labelModalItemValue}
          onLabelModalItemChange={(e) => setLabelModalItemValue(e.target.value)}
        />
        {selectedField.type === "text" && (
          <TextModalItem
            value={textModalItemValue}
            onTextModalItemChange={(e) => setTextModalItemValue(e.target.value)}
          />
        )}
        {selectedField.type === "select" && (
          <SelectModalItem
            value={selectModalItemOptionValue}
            onSelectModalItemChange={(e) => {
              const lines = e.target.value.split("\n");
              setSelectModalItemOptionValue(lines);
            }}
          />
        )}
        <CheckBoxModalItem
          checked={checkboxModalItemValue}
          onCheckboxModalItemChange={(e) =>
            setCheckboxModalItemValue(e.target.checked)
          }
        />
      </div>
      <div className="mt-6 text-right space-x-2">
        <button
          className="px-4 py-2 bg-blue-300 rounded hover:cursor-pointer hover:bg-gray-400"
          onClick={handleSave}
        >
          Save
        </button>
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
