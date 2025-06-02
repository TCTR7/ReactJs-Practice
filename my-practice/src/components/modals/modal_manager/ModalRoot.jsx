import { createPortal } from "react-dom";
import {MODAL_COMPONENTS} from "../../../data/modalData";



export default function ModalRoot({ modalType, props, onClose }) {
  // If no modal is provided, return null
  if (!modalType) return null;

  // Get the component for the specified modal type
  const ModalComponent = MODAL_COMPONENTS[modalType];

  // If the modal component is not found, return null
  if (!ModalComponent) return null;

  // Render the modal component using createPortal
  return createPortal(
    <ModalComponent {...props} onClose={onClose} />,
    document.getElementById("modal-root")
  );
}
