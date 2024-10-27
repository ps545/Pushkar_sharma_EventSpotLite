// src/components/EventModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const EventModal = ({ event, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{event.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={event.imageUrl} alt={event.name} className="img-fluid mb-3" />
        <p>{event.date} - {event.location}</p>
        <p>{event.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;
