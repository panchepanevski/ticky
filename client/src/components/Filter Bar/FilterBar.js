import React from 'react';
import styled from '@emotion/styled';
import { Button } from './Button';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import LocationIcon from '../../assets/icons/LocationIcon';
import FilterIcon from '../../assets/icons/FilterIcon';
import PriorityFilter from './PriorityFilter';
import StatusFilter from './StatusFilter';
import LocationFilter from './LocationFilter';
import DateFilter from './DateFilter';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 30% 15% 15%;
  grid-template-rows: auto auto;
  justify-items: center;
  align-items: center;
  height: 30px;
  width: 100%;
  margin-bottom: 25px;
  border-top: 1px solid ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.elements_bg};
`;

const IconWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
`;

const PriorityWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
`;

const StatusWrapper = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  justify-self: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
`;

const DateWrapper = styled.div`
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  justify-self: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
`;

const LocationWrapper = styled.div`
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  justify-self: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
`;

const OnClickWrapperPriority = styled.div`
  display: ${props => (props.priority ? 'block' : 'none')};
  grid-column: 1 / 6;
  grid-row: 2 / 3;
  width: 100%;
  height: 30px;
`;

const OnClickWrapperStatus = styled.div`
  display: ${props => (props.status ? 'block' : 'none')};
  grid-column: 1 / 6;
  grid-row: 2 / 3;
  width: 100%;
  height: 30px;
`;

const OnClickWrapperLocation = styled.div`
  display: ${props => (props.location ? 'block' : 'none')};
  grid-column: 1 / 6;
  grid-row: 2 / 3;
  width: 100%;
  height: 30px;
`;

const OnClickWrapperDate = styled.div`
  display: ${props => (props.date ? 'block' : 'none')};
  grid-column: 1 / 6;
  grid-row: 2 / 3;
  width: 100%;
  height: 30px;
`;

export default function FilterBar() {
  const [priority, setPriority] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [location, setLocation] = React.useState(false);
  const [date, setDate] = React.useState(false);

  function handleClick(filter) {
    if (filter === 'priority') {
      setPriority(!priority);
      setStatus(false);
      setLocation(false);
      setDate(false);
    } else if (filter === 'status') {
      setPriority(false);
      setStatus(!status);
      setLocation(false);
      setDate(false);
    } else if (filter === 'location') {
      setPriority(false);
      setStatus(false);
      setLocation(!location);
      setDate(false);
    } else if (filter === 'date') {
      setPriority(false);
      setStatus(false);
      setLocation(false);
      setDate(!date);
    }
  }

  return (
    <Wrapper>
      <IconWrapper>
        <Button>
          <FilterIcon />
        </Button>
      </IconWrapper>
      <PriorityWrapper>
        <Button onClick={() => handleClick('priority')}>PRIORITY</Button>
      </PriorityWrapper>
      <OnClickWrapperPriority priority={priority}>
        <PriorityFilter />
      </OnClickWrapperPriority>
      <StatusWrapper>
        <Button onClick={() => handleClick('status')}>STATUS</Button>
      </StatusWrapper>
      <OnClickWrapperStatus status={status}>
        <StatusFilter />
      </OnClickWrapperStatus>
      <DateWrapper>
        <Button onClick={() => handleClick('date')}>
          <CalendarIcon />
        </Button>
      </DateWrapper>
      <OnClickWrapperDate date={date}>
        <DateFilter />
      </OnClickWrapperDate>
      <LocationWrapper>
        <Button onClick={() => handleClick('location')}>
          <LocationIcon />
        </Button>
      </LocationWrapper>
      <OnClickWrapperLocation location={location}>
        <LocationFilter />
      </OnClickWrapperLocation>
    </Wrapper>
  );
}
