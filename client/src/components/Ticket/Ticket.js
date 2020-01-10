import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Title } from './Title';
import Status from './Status';
import Priority from './Priority';
import { IconsWrapper } from './IconsWrapper';
import userIcon from '../../assets/icons/userIcon.svg';
import locationIcon from '../../assets/icons/locationIcon.svg';
import timedateIcon from '../../assets/icons/timedateIcon.svg';
import editIcon from '../../assets/icons/editIcon.svg';
import Progress from './Progress';

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-rows: auto auto auto auto auto;
  row-gap: 10px;
  justify-self: center;
  width: 98%;
  height: auto;
  background-color: ${props => props.theme.colors.elements_bg};
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.15);
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
  grid-column: 6 / 11;
  grid-row: 2 /3;
  margin: 5px 0;
`;

const ProgressWrapper = styled.div`
  grid-column: 1 / 11;
  grid-row: 3 / 4;
  margin: 5px 0;
`;

const DescriptionWrapper = styled.div`
  grid-column: 1 / 6;
  grid-row: 4 / 5;
  cursor: pointer;
`;

const AssignedWrapper = styled.div`
  grid-column: 5 / 7;
  grid-row: 4 / 5;
  justify-self: center;
  cursor: pointer;
`;

const LocationWrapper = styled.div`
  grid-column: 7 / 9;
  grid-row: 4 / 5;
  justify-self: center;
  cursor: pointer;
`;

const TimeDateWrapper = styled.div`
  grid-column: 9 / 11;
  grid-row: 4 / 5;
  justify-self: center;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

const BorderLine = styled.div`
  grid-column: 1 / 11;
  grid-row: 4 / 5;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  margin-top: 30px;
`;

const ExtraDescription = styled.div`
  display: ${props => (props.description ? 'block' : 'none')};
  grid-column: 1 / 11;
  grid-row: 5 / 6;
  margin: 10px 0;
`;

const ExtraAssigned = styled.div`
  display: ${props => (props.assignedUser ? 'block' : 'none')};
  grid-column: 1 / 11;
  grid-row: 5 / 6;
  margin: 10px 0;
`;

const TicketLocation = styled.div`
  display: ${props => (props.ticketLocation ? 'block' : 'none')};
  grid-column: 1 / 11;
  grid-row: 5 / 6;
  margin: 10px 0;
`;

const TicketTimeDate = styled.div`
  display: ${props => (props.ticketTimedate ? 'block' : 'none')};
  grid-column: 1 / 11;
  grid-row: 5 / 6;
  margin: 10px 0;
`;

const Edit = styled.img`
  grid-column: 10 / 11;
  grid-row: 1 / 2;
  width: 24px;
  height: 24px;
  margin-top: 20px;
`;

export default function Ticket({
  id,
  name,
  details,
  status,
  priority,
  assigned,
  location,
  timestamp,
  progress
}) {
  const [description, setDescription] = React.useState(false);
  const [assignedUser, setAssignedUser] = React.useState(false);
  const [ticketLocation, setTicketLocation] = React.useState(false);
  const [ticketTimedate, setTicketTimedate] = React.useState(false);
  const [progressValue, setProgressValue] = React.useState(progress);

  function handleClick(filter) {
    if (filter === 'description') {
      setDescription(!description);
      setAssignedUser(false);
      setTicketLocation(false);
      setTicketTimedate(false);
    } else if (filter === 'assignedUser') {
      setDescription(false);
      setAssignedUser(!assignedUser);
      setTicketLocation(false);
      setTicketTimedate(false);
    } else if (filter === 'ticketLocation') {
      setDescription(false);
      setAssignedUser(false);
      setTicketLocation(!ticketLocation);
      setTicketTimedate(false);
    } else if (filter === 'ticketTimedate') {
      setDescription(false);
      setAssignedUser(false);
      setTicketLocation(false);
      setTicketTimedate(!ticketTimedate);
    }
  }

  const date = new Date(timestamp);
  return (
    <Container>
      <TitleWrapper>
        <Title>{name}</Title>
      </TitleWrapper>
      <Edit src={editIcon}></Edit>

      <StatusWrapper>
        Status:
        <Status ticketId={id} value={status} />
      </StatusWrapper>

      <PriorityWrapper>
        Priority:
        <Priority ticketId={id} value={priority} />
      </PriorityWrapper>

      <ProgressWrapper>
        Progress:
        <Progress
          value={progressValue}
          onChange={event => setProgressValue(parseInt(event.target.value))}
          ticketId={id}
        />
      </ProgressWrapper>

      <DescriptionWrapper onClick={() => handleClick('description')}>
        Description &#x025BE;
      </DescriptionWrapper>
      <ExtraDescription description={description}>{details}</ExtraDescription>

      <AssignedWrapper onClick={() => handleClick('assignedUser')}>
        <IconsWrapper src={userIcon}></IconsWrapper>
      </AssignedWrapper>
      <ExtraAssigned assignedUser={assignedUser}>Assigned by: {assigned}</ExtraAssigned>

      <LocationWrapper onClick={() => handleClick('ticketLocation')}>
        <IconsWrapper src={locationIcon}></IconsWrapper>
      </LocationWrapper>
      <TicketLocation ticketLocation={ticketLocation}>Location: {location}</TicketLocation>

      <TimeDateWrapper onClick={() => handleClick('ticketTimedate')}>
        <IconsWrapper src={timedateIcon}></IconsWrapper>
      </TimeDateWrapper>
      <TicketTimeDate ticketTimedate={ticketTimedate}>
        Date and Time: {date.toLocaleString()}
      </TicketTimeDate>
      <BorderLine />
    </Container>
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  priority: PropTypes.string,
  assigned: PropTypes.string,
  location: PropTypes.string
};
