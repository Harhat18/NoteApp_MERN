import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Note as NoteModel } from "./models/note";
import Note from "./components/Note";
import styles from "./styles/NotesPage.module.css";
import * as NotesApi from "./network/note_api";
import AddNoteDialog from "./components/AddNoteDialog";
function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  const [showAddNotedialog, setShowAddNotedialog] = useState(false);

  useEffect(() => {
    async function loadNotes() {
      try {
        const notes = await NotesApi.fetchNotes();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);

  return (
    <Container>
      <Button onClick={() => setShowAddNotedialog(true)}>Yeni Not Ekle</Button>
      <Row xs={1} md={2} xl={3} className="g-4">
        {notes.map((note) => (
          <Col key={note._id}>
            <Note note={note} className={styles.note} />
          </Col>
        ))}
      </Row>
      {showAddNotedialog && (
        <AddNoteDialog onDismiss={() => setShowAddNotedialog(false)} />
      )}
    </Container>
  );
}

export default App;
