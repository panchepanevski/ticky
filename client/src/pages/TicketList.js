import React from 'react';
import styled from '@emotion/styled';
import Ticket from '../components/Ticket/Ticket';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function TicketList() {
  const [tickets, setTickets] = React.useState([]);

  async function fetchTickets() {
    const response = await fetch('http://localhost:8080/tickets');
    const newTickets = await response.json();
    setTickets(newTickets);
  }

  React.useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <Container>
      {tickets.map(ticket => (
        <Ticket
          key={ticket.id}
          id={ticket.id}
          name={ticket.name}
          timedate={ticket.timedate}
          assigned={ticket.assigned}
          location={ticket.location}
          status={ticket.status}
          priority={ticket.priority}
          details={ticket.details}
          progress={ticket.progress}
        />
      ))}
    </Container>
  );
}
