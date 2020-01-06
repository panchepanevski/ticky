import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 31% 30% 24% 1fr;
  grid-template-rows: 1fr;
  width: auto;
  height: 40px;
  margin: 10px 0;
`;

const WrapperNormal = styled.div`
  grid-column: 2 / 3;
`;

const WrapperMedium = styled.div`
  grid-column: 3 / 4;
`;

const WrapperHigh = styled.div`
  grid-column: 4 / 5;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  outline: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  text-shadow: 1px 1px 1px 1px #000000;
  border: none;
  text-transform: uppercase;
  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.tertiary};
  }
`;

const NormalCircle = styled.div`
  position: absolute;
  grid-column: 2 / 3;
  width: 13px;
  height: 13px;
  border-radius: 30%;
  background-color: ${props => props.theme.colors.priority_normal};
  margin-top: 1px;
  margin-right: 12px;
`;

const MediumCircle = styled.div`
  position: absolute;
  grid-column: 2 / 3;
  width: 13px;
  height: 13px;
  border-radius: 30%;
  background-color: ${props => props.theme.colors.priority_medium};
  margin-top: 1px;
`;

const HighCircle = styled.div`
  position: absolute;
  grid-column: 2 / 3;
  width: 13px;
  height: 13px;
  border-radius: 30%;
  background-color: ${props => props.theme.colors.priority_high};
  margin-top: 1px;
  margin-right: -20px;
`;

export default function PriorityFilter() {
  const [tickets, setTickets] = React.useState([]);
  const [filter, setFilter] = React.useState('');

  async function fetchTickets() {
    const response = await fetch('http://localhost:8080/tickets');
    const newTickets = await response.json();
    setTickets(newTickets);
  }

  React.useEffect(() => {
    fetchTickets(filter);
  }, [filter]);

  return (
    <Wrapper>
      <WrapperNormal>
        {tickets.map(ticket => (
          <Button
            onClick={() => setFilter(ticket.priority)}
            key={ticket.id}
            priority={ticket.priority}
          >
            <NormalCircle />
            Normal
          </Button>
        ))}
      </WrapperNormal>
      <WrapperMedium>
        <Button
          onClick={() => {
            setFilter('/?priority=medium');
          }}
        >
          <MediumCircle />
          Medium
        </Button>
      </WrapperMedium>
      <WrapperHigh>
        <Button
          onClick={() => {
            setFilter('/?priority=high');
          }}
        >
          <HighCircle />
          High
        </Button>
      </WrapperHigh>
    </Wrapper>
  );
}
