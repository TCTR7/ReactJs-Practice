import { useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useEscKey } from "../../hooks/useEscKey";
/**
 * BaseModal component provides a basic modal structure with a title and children content.
 * It handles closing the modal on outside clicks and Escape key presses.
 *
 * @param {Object} props - Component properties
 * @param {string} props.title - The title of the modal
 * @param {React.ReactNode} props.children - The content to be displayed inside the modal
 * @param {Function} props.onClose - Function to call when the modal should be closed
 */

export default function BaseModal({ title, children, onClose }) {
  const dialogRef = useRef();
  useOnClickOutside(dialogRef, onClose);
  useEscKey(onClose);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div
        ref={dialogRef}
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md animate-fade-in"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
