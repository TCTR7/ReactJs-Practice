import React, { useState, useEffect } from "react";
import { useFormBuilderStore } from "../../stores/useFormBuilderStore";
import { useModal } from "../../../../components/modals/modal_manager/ModalContext";
import { MODAL_DATA } from "../../../../data/modalData";
import BaseModal from "../../../../components/modals/BaseModal";
import TextModalItem from "./modal_items/TextModalItem";
import SelectModalItem from "./modal_items/SelectModalItem";
import CheckBoxModalItem from "./modal_items/CheckBoxModalItem";
import LabelModalItem from "./modal_items/LabelModalItem";
import RadioModalItem from "./modal_items/RadioModalItem";
import NumberModalItem from "./modal_items/NumberModalItem";
import EmailModalItem from "./modal_items/EmailModalItem";


export default function FieldEditModal({ onClose }) {
  const { fields, updateField, selectedFieldId, deselectField } =
    useFormBuilderStore();
  const { closeModal } = useModal();

  const selectedField = fields.find((field) => field.id === selectedFieldId);

  // Move all hooks above any conditional returns
  const [labelModalItemValue, setLabelModalItemValue] = useState("");
  const [textModalItemValue, setTextModalItemValue] = useState("");
  const [selectModalItemOptionValue, setSelectModalItemOptionValue] = useState(
    []
  );
  const [checkboxModalItemValue, setCheckboxModalItemValue] = useState(false);
  const [numberModalItemValue, setNumberModalItemValue] = useState("");
  const [emailModalItemValue, setEmailModalItemValue] = useState("");
  const [radioModalItemOptions, setRadioModalItemOptions] = useState([]);

  function handleSave() {
    const newField = {};
    if (selectModalItemOptionValue) {
      newField.options = selectModalItemOptionValue;
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
    if (numberModalItemValue) {
      newField.placeholder = numberModalItemValue;
    }
    if (emailModalItemValue) {
      newField.placeholder = emailModalItemValue;
    }
    if (radioModalItemOptions.length) {
      newField.options = radioModalItemOptions;
    }
    updateField(selectedFieldId, newField);
    handleClose();
  }

  function resetModalValues() {
    setLabelModalItemValue("");
    setTextModalItemValue("");
    setSelectModalItemOptionValue([]);
    setCheckboxModalItemValue(false);
    setNumberModalItemValue("");
    setEmailModalItemValue("");
    setRadioModalItemOptions([]);
  }

  function handleClose() {
    deselectField();
    closeModal(MODAL_DATA.FIELD_EDITOR);
    resetModalValues();
  }

  function getModalItem(fieldType) {
    switch (fieldType) {
      case "text":
        return (
          <TextModalItem
            value={textModalItemValue}
            onTextModalItemChange={(e) => setTextModalItemValue(e.target.value)}
          />
        );
      case "select":
        return (
          <SelectModalItem
            options={selectModalItemOptionValue}
            onSelectModalItemChange={setSelectModalItemOptionValue}
          />
        );
      case "checkbox":
        return (
          <CheckBoxModalItem
            checked={checkboxModalItemValue}
            onCheckboxModalItemChange={(e) =>
              setCheckboxModalItemValue(e.target.checked)
            }
          />
        );
      case "label":
        return (
          <LabelModalItem
            value={labelModalItemValue}
            onLabelModalItemChange={(e) =>
              setLabelModalItemValue(e.target.value)
            }
          />
        );
      case "radio":
        return (
          <RadioModalItem
            options={radioModalItemOptions}
            onRadioModalItemChange={setRadioModalItemOptions}
          />
        );
      case "number":
        return (
          <NumberModalItem
            value={numberModalItemValue}
            onTextModalItemChange={(e) => setNumberModalItemValue(e.target.value)}
          />
        );
      case "email":
        return (
          <EmailModalItem
            value={emailModalItemValue}
            onTextModalItemChange={(e) => setEmailModalItemValue(e.target.value)}
          />
        );
      default:
        return null;
    }
  }

  useEffect(() => {
    if (!selectedField) {
      // Early return nếu không có selectedField
      return;
    }
    setLabelModalItemValue(selectedField.label);
    setTextModalItemValue(selectedField.placeholder);
    setSelectModalItemOptionValue(selectedField.options);
    setCheckboxModalItemValue(selectedField.required);
    setNumberModalItemValue(selectedField.placeholder);
    setEmailModalItemValue(selectedField.placeholder);
    setRadioModalItemOptions(selectedField.options || []);

    return () => {
      resetModalValues();
    };
  }, [selectedField]);

  if (!selectedField) return null;

  return (
    <BaseModal title="Edit Field" onClose={onClose}>
      <div className="space-y-3">
        <LabelModalItem
          value={labelModalItemValue}
          onLabelModalItemChange={(e) => setLabelModalItemValue(e.target.value)}
        />
        {getModalItem(selectedField.type)}
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
