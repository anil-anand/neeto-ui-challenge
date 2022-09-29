import React from "react";

import { Pane as NeetoUIPane, Typography } from "neetoui";

import Form from "./Form";

import { CONTACTS_FORM_INITIAL_FORM_VALUES } from "../constants";

const Pane = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <NeetoUIPane isOpen={showPane} onClose={onClose}>
      <NeetoUIPane.Header>
        <Typography style="h2" weight="semibold">
          Add new contact
        </Typography>
      </NeetoUIPane.Header>
      <Form contact={CONTACTS_FORM_INITIAL_FORM_VALUES} onClose={onClose} />
    </NeetoUIPane>
  );
};

export default Pane;
