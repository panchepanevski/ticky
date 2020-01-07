import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import Ticket from '../components/Ticket/Ticket';
import Header from '../components/Header/Header';
import FilterBar from '../components/Filter Bar/FilterBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function TicketList() {
  const [tickets, setTickets] = React.useState([]);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let filter = useLocation().search;
  console.log(filter);

  async function fetchTickets() {
    const response = await fetch(`http://localhost:8080/tickets${filter}`);
    const newTickets = await response.json();
    setTickets(newTickets);
  }

  React.useEffect(() => {
    fetchTickets();
  }, [filter]);

  return (
    <>
      <Header />
      <FilterBar />
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
    </>
  );
}
