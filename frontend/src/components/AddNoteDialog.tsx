import React from "react";
import { Button, Form, Modal, ModalFooter } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Note } from "../models/note";
import { NoteInput } from "../network/note_api";
import * as NotesApi from "../network/note_api";
interface AddNoteDialogProps {
  onDismiss: () => void;
  onNoteSave: (note: Note) => void;
}
const AddNoteDialog = ({ onDismiss, onNoteSave }: AddNoteDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NoteInput>();

  async function onSubmit(input: NoteInput) {
    try {
      const noteResponse = await NotesApi.createNote(input);
      onNoteSave(noteResponse);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="addNoteForm" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Başlık</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lütfen Bir Başlık Oluşturun"
              isInvalid={!!errors.title}
              {...register("title", {
                required: "Lütfen Başlık Alanını Doldurunuz",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Not</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Lütfen Notlarınızı Buraya Ekleyiniz"
              {...register("text")}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <ModalFooter>
        <Button type="submit" form="addNoteForm" disabled={isSubmitting}>
          Ekle
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddNoteDialog;
