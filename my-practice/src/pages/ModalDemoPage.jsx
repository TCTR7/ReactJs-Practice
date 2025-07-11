import { useModal } from "../components/modals/modal_manager/ModalContext";
import { MODAL_DATA } from "../data/modalData";
import React, { useState } from "react";

export default function ModalDemoPage() {
  const [modalType, setModalType] = useState(null);
  const { openModal, closeModal } = useModal();

  const showModal = () => {
    console.log("Opening modal of type:", modalType);
    if (!modalType || !MODAL_DATA[modalType]) {
      return;
    }
    console.log("Modal data:", MODAL_DATA[modalType]);
    openModal(MODAL_DATA[modalType].type, {
      message: MODAL_DATA[modalType].default_message,
      onclose: closeModal,
      onConfirm: () => alert("Deleted!"),
    });
  };

  return (
    <div className="p-6 gap-4 bg-white w-100 sm:w-150 md:w-200 duration-500 mx-auto">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-xl font-bold mb-4">🧭 Modal Manager</h1>
        <select
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          value={modalType || ""}
          onChange={(e) => setModalType(e.target.value.toUpperCase())}
        >
          <option value="">SELECT MODAL TYPE</option>
          {Object.values(MODAL_DATA).map((modal) => (
            <option key={modal.type} value={modal.type}>
              {modal.type.replace("_", " ").toUpperCase()}
            </option>
          ))}
        </select>
        <button
          onClick={showModal}
          className={
            "bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-800 hover:cursor-pointer transition-colors duration-200" +
            (modalType ? "" : " opacity-50 cursor-not-allowed")
          }
          disabled={!modalType}
        >
          Open Modal
        </button>
      </div>
    </div>
  );
}
