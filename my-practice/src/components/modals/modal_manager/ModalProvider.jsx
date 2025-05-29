//ModalContext: is where the "shared data source" (React Context API) is created
// ModalProvider: is where that data is provided to the entire component tree
// useModal: is a custom hook used to get data from the ModalContext
// ModalRoot: is where the modals are rendered using React Portals


import React, { useState, useCallback } from "react";
import { ModalContext } from "./ModalContext";
import ModalRoot from "./ModalRoot";

export default function ModalProvider({ children }) {
  const [modalType, setModalType] = useState(null);
  const [props, setProps] = useState({});

  const openModal = useCallback((modalType, modalProps = {}) => {
    setModalType(modalType);
    setProps(modalProps);
  }, []);

  const closeModal = useCallback(() => {
    setModalType(null);
    setProps({});
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ModalRoot modalType={modalType} props={props} onClose={closeModal} />
    </ModalContext.Provider>
  );
}
