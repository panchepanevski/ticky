import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Name } from './Title';

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-rows: auto auto auto auto auto;
  justify-self: center;
  width: 97%;
  max-width: 380px;
  height: auto;
  background-color: ${props => props.theme.colors.elements_bg};
`;

const TitleWrapper = styled.div`
  grid-column: 1 / 10;
  grid-row: 1 / 2;
  margin: 5px 0;
`;

const StatusWrapper = styled.div`
  grid-column: 1 / 5;
  grid-row: 2 / 3;
  margin: 5px 0;
`;

const PriorityWrapper = styled.div`
  grid-column: 6 / 10;
  grid-row: 2 /3;
  margin: 5px 0;
`;

const ProgressWrapper = styled.div`
  grid-column: 1 / 10;
  grid-row: 3 / 4;
  margin: 5px 0;
`;

const DescriptionWrapper = styled.div`
  grid-column: 1 / 4;
  grid-row: 4 / 5;
  margin: 5px 0;
`;

const AssignedWrapper = styled.div`
  grid-column: 4 / 6;
  grid-row: 4 / 5;
  margin: 5px 0;
`;

const LocationWrapper = styled.div`
  grid-column: 6 / 8;
  grid-row: 4 / 5;
  margin: 5px 0;
`;

const TimeDateWrapper = styled.div`
  grid-column: 8 / 10;
  grid-row: 4 / 5;
  margin: 5px 0;
`;

export default function Ticket({
  name,
  status,
  priority,
  description,
  assigned,
  location,
  datetime
}) {
  return (
    <Container>
      <TitleWrapper>
        <Name>{name}</Name>
      </TitleWrapper>
      <StatusWrapper>Status:{status}</StatusWrapper>
      <PriorityWrapper>Priority:{priority}</PriorityWrapper>
      <ProgressWrapper>sasas</ProgressWrapper>
      <DescriptionWrapper>{description}</DescriptionWrapper>
      <AssignedWrapper>{assigned}</AssignedWrapper>
      <LocationWrapper>{location}</LocationWrapper>
      <TimeDateWrapper>{datetime}</TimeDateWrapper>
    </Container>
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  priority: PropTypes.string,
  description: PropTypes.string,
  assigned: PropTypes.string,
  location: PropTypes.string,
  datetime: PropTypes.string
};
