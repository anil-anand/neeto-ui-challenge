import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS_DATA } from "./constants";
import SideMenu from "./SideMenu";
import Table from "./Table";

const Contacts = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SideMenu showMenu={showMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenuBar(showMenuBar => !showMenuBar)}
          title="All Contacts"
          actionBlock={
            <Button icon="ri-add-line" label="Add Contact" size="small" />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Ect.",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {CONTACTS_DATA.length > 0 ? (
          <Table contacts={CONTACTS_DATA} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={null}
            primaryActionLabel="Add new contact"
            subtitle="Add a new contact"
            title="Looks like you don't have any contacts!"
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
