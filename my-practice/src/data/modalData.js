import React from "react";

export const MODAL_DATA = {
  CONFIRM: { 'type': 'confirm', 'default_message': 'Are you sure you want to proceed?'},
  CONFIRM_DELETE: { 'type': 'confirm_delete', 'default_message': 'Are you sure you want to delete this item? this action cannot be undone.'},
  INFORMATION: { 'type': 'information', 'default_message': 'This is an informational modal.'},
  FIELD_EDITOR: { 'type': 'field_editor', 'default_message': 'Edit the field details.'},
  // Add more modal types as needed
};

export const MODAL_COMPONENTS = {
  [MODAL_DATA.CONFIRM.type]: React.lazy(() => import('../components/modals/ConfirmModal')),
  [MODAL_DATA.CONFIRM_DELETE.type]: React.lazy(() => import('../components/modals/ConfirmDeleteModal')),
  [MODAL_DATA.INFORMATION.type]: React.lazy(() => import('../components/modals/InfoModal')),
  [MODAL_DATA.FIELD_EDITOR.type]: React.lazy(() => import('../modules/form_builder/components/modals/FieldEditModal')),
};
export default { MODAL_DATA, MODAL_COMPONENTS };
