// src/components/EventCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import './EventCard.css';

const EventCard = ({ event, onClick }) => {
  return (
    <Card className="event-card mb-4" onClick={onClick}>
      <Card.Img variant="top" src={event.imageUrl} alt={event.name} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.date} - {event.location}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
