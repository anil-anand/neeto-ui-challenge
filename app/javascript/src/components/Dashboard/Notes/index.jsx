import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import { NOTES_CARD_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Note from "./Note";
import NewNotePane from "./Pane/Create";
import SideMenu from "./SideMenu";

const Notes = () => {
  const [loading, setLoading] = useState(false);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [notes, setNotes] = useState(NOTES_CARD_DATA);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <SideMenu showMenu={showMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenuBar(showMenuBar => !showMenuBar)}
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add new note"
              size="small"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Ect.",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length > 0 ? (
          notes.map(note => (
            <Note
              key={note.id}
              note={note}
              setSelectedNoteId={setSelectedNoteId}
              setShowDeleteAlert={setShowDeleteAlert}
            />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add new note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteId={selectedNoteId}
            setSelectedNoteId={setSelectedNoteId}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
