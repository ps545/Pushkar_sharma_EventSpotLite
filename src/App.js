// src/App.js
import React, { useState } from 'react';
import { Container, Navbar, Form, FormControl } from 'react-bootstrap';
import EventListing from './components/EventListing';
import EventModal from './components/EventModal';
import eventsData from './data/eventsData';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = eventsData.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>EventSpot Lite</Navbar.Brand>
          <Form inline="true">
            <FormControl
              type="text"
              placeholder="Search events..."
              className="mr-sm-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
        </Container>
      </Navbar>
      <Container>
        <EventListing events={filteredEvents} onSelectEvent={setSelectedEvent} />
      </Container>
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          show={Boolean(selectedEvent)}
          onHide={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default App;
