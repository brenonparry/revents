import { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import EventForm from "../../features/events/eventForm/EventForm";
import { Route } from "react-router-dom";
import eventDetailedPage from "../../features/events/eventsDetailed/eventDetailedPage";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/events' component={EventDashboard}/>
        <Route path='/events/:id' component={eventDetailedPage}/>
        <Route path='/createEvent' component={EventForm}/>
      </Container>
    </>
  );
}
