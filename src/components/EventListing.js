// src/components/EventListing.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EventCard from './EventCard';

const EventListing = ({ events, onSelectEvent }) => {
  return (
    <Row>
      {events.map((event) => (
        <Col key={event.id} xs={12} sm={6} md={4} lg={3}>
          <EventCard event={event} onClick={() => onSelectEvent(event)} />
        </Col>
      ))}
    </Row>
  );
};

export default EventListing;
