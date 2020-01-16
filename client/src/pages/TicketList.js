import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import Ticket from '../components/Ticket/Ticket';
import FilterBar from '../components/Filter Bar/FilterBar';
import Header from '../components/Header/Header';
import AddTicketButton from '../components/Header/AddTicketButton';
import BackMainButton from '../components/Header/BackMainButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 1s;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
`;

export default function TicketList() {
  const [tickets, setTickets] = React.useState([]);

  //FILTER
  let filter = useLocation().search;

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  //FILTER

  React.useEffect(() => {
    async function fetchTickets() {
      const response = await fetch(`/api/tickets${filter}`);
      const newTickets = await response.json();
      setTickets(newTickets);
    }
    fetchTickets();
  }, [filter]);

  useQuery();

  return (
    <>
      <Header>
        <AddTicketButton />
        <BackMainButton />
      </Header>
      <FilterBar />
      <Container>
        {tickets.map(ticket => (
          <Ticket key={ticket.id} {...ticket} />
        ))}
      </Container>
    </>
  );
}
