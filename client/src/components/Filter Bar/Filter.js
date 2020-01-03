import React from 'react';
import styled from '@emotion/styled';
import { Button } from './Button';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import LocationIcon from '../../assets/icons/LocationIcon';
import FilterIcon from '../../assets/icons/FilterIcon';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 30% 15% 15%;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  height: 30px;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.elements_bg};
`;

const FilterIconWrapper = styled.div`
  grid-column: 1 / 2;
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
`;

const PriorityFilter = styled.div`
  grid-column: 2 / 3;
  justify-self: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
  /* border: 1px solid ${props => props.theme.colors.background}; */
`;

const StatusFilter = styled.div`
  grid-column: 3 / 4;
  justify-self: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
  /* border: 1px solid ${props => props.theme.colors.background}; */
`;

const DateFilter = styled.div`
  grid-column: 4 / 5;
  justify-self: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
  /* border: 1px solid ${props => props.theme.colors.background}; */
`;

const LocationFilter = styled.div`
  grid-column: 5 / 6;
  justify-self: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
  /* border: 1px solid ${props => props.theme.colors.background}; */
`;

export default function Filter() {
  return (
    <Wrapper>
      <FilterIconWrapper>
        <Button>
          <FilterIcon />
        </Button>
      </FilterIconWrapper>

      <PriorityFilter>
        <Button>PRIORITY</Button>
      </PriorityFilter>
      <StatusFilter>
        <Button>STATUS</Button>
      </StatusFilter>
      <DateFilter>
        <Button>
          <CalendarIcon />
        </Button>
      </DateFilter>
      <LocationFilter>
        <Button>
          <LocationIcon />
        </Button>
      </LocationFilter>
    </Wrapper>
  );
}
