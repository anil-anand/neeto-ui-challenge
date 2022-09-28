import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ setShowDeleteAlert, onClose }) => (
  <Alert
    isOpen
    message="Are you sure you want to delete this contact? This cannot be undone."
    title="Delete contact?"
    onClose={onClose}
    onSubmit={() => {
      Toastr.success("Contact deleted successfully.");
      setShowDeleteAlert(false);
    }}
  />
);

export default DeleteAlert;
