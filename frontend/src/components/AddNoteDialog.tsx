import React from "react";
import { Button, Form, Modal, ModalFooter } from "react-bootstrap";

interface AddNoteDialogProps {
  onDismiss: () => void;
}
const AddNoteDialog = ({ onDismiss }: AddNoteDialogProps) => {
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="addNoteForm">
          <Form.Group className="mb-3">
            <Form.Label>Başlık</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lütfen Bir Başlık Oluşturun"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Not</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Lütfen Notlarınızı Buraya Ekleyiniz"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <ModalFooter>
        <Button type="submit" form="addNoteForm">
          Ekle
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddNoteDialog;
