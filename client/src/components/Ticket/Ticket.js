import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Title } from './Title';
import Status from './Status';
import Priority from './Priority';
import { IconsWrapper } from './IconsWrapper';
import Progress from './Progress';
import LocationIcon from '../../assets/icons/LocationIcon';
import UserIcon from '../../assets/icons/UserIcon';
import TimeDateIcon from '../../assets/icons/TimeDateIcon';
import EditIcon from '../../assets/icons/EditIcon';

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
  grid-area: 1 / 1 / 2 / 10;
  margin: 5px 0;
`;

const StatusWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 5;
  margin: 5px 0;
`;

const PriorityWrapper = styled.div`
  grid-area: 2 / 6 / 3 / 11;
  margin: 5px 0;
`;

const ProgressWrapper = styled.div`
  grid-area: 3 / 1 / 4 / 11;
  margin: 5px 0;
`;

const DescriptionWrapper = styled.div`
  grid-area: 4 / 1 / 5 / 6;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.tertiary};
  }
`;

const AssignedWrapper = styled.div`
  grid-area: 4 / 5 / 5 / 7;
  justify-self: center;
  cursor: pointer;
`;

const LocationWrapper = styled.div`
  grid-area: 4 / 7 / 5 / 9;
  justify-self: center;
  cursor: pointer;
`;

const TimeDateWrapper = styled.div`
  grid-area: 4 / 9 / 5 / 11;
  justify-self: center;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

const BorderLine = styled.div`
  grid-area: 4 / 1 / 5 / 11;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  margin-top: 30px;
`;

const Edit = styled.button`
  grid-area: 1 / 10 / 2 / 11;
  margin-top: 20px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.theme.colors.tertiary};
`;

const ExtraDescription = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  grid-area: 5 / 1 / 6 / 11;
  margin: 10px 0;
  animation: fadeIn 1s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fadeIn {
    animation-name: fadeIn;
  }
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
  const [progressValue, setProgressValue] = React.useState(progress);
  const date = new Date(timestamp);
  const [activeDetail, setActiveDetail] = React.useState(null);

  function handleClick(filter) {
    if (filter === activeDetail) {
      setActiveDetail(null);
    } else {
      setActiveDetail(filter);
    }
  }

  return (
    <Container>
      <TitleWrapper>
        <Title>{name}</Title>
      </TitleWrapper>
      <Edit>
        <EditIcon />
        beta
      </Edit>

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
      <ExtraDescription show={activeDetail === 'description'}>{details}</ExtraDescription>

      <AssignedWrapper onClick={() => handleClick('assignedUser')}>
        <IconsWrapper>
          <UserIcon />
        </IconsWrapper>
      </AssignedWrapper>
      <ExtraDescription show={activeDetail === 'assignedUser'}>
        Assigned by: {assigned}
      </ExtraDescription>

      <LocationWrapper onClick={() => handleClick('ticketLocation')}>
        <IconsWrapper>
          <LocationIcon />
        </IconsWrapper>
      </LocationWrapper>
      <ExtraDescription show={activeDetail === 'ticketLocation'}>
        Location: {location}
      </ExtraDescription>

      <TimeDateWrapper onClick={() => handleClick('ticketTimedate')}>
        <IconsWrapper>
          <TimeDateIcon />
        </IconsWrapper>
      </TimeDateWrapper>
      <ExtraDescription show={activeDetail === 'ticketTimedate'}>
        Date and Time: {date.toLocaleString()}
      </ExtraDescription>
      <BorderLine />
    </Container>
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  priority: PropTypes.string,
  assigned: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.number,
  details: PropTypes.string,
  progress: PropTypes.string,
  timestamp: PropTypes.number
};
