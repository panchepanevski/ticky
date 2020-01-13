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

const Details = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  grid-column: 1 / 6;
  grid-row: 2 / 3;
  width: 100%;
  height: 30px;
`;

export default function FilterBar() {
  const [activeDetail, setActiveDetail] = React.useState(null);

  function handleClick(filter) {
    if (filter === activeDetail) {
      setActiveDetail(null);
    } else {
      setActiveDetail(filter);
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
      <Details show={activeDetail === 'priority'}>
        <PriorityFilter />
      </Details>

      <StatusWrapper>
        <Button onClick={() => handleClick('status')}>STATUS</Button>
      </StatusWrapper>
      <Details show={activeDetail === 'status'}>
        <StatusFilter />
      </Details>
      <DateWrapper>
        <Button onClick={() => handleClick('date')}>
          <CalendarIcon />
        </Button>
      </DateWrapper>
      <Details show={activeDetail === 'date'}>
        <DateFilter />
      </Details>
      <LocationWrapper>
        <Button onClick={() => handleClick('location')}>
          <LocationIcon />
        </Button>
      </LocationWrapper>
      <Details show={activeDetail === 'location'}>
        <LocationFilter />
      </Details>
    </Wrapper>
  );
}
