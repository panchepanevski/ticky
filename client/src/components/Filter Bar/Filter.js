import React from 'react';
import styled from '@emotion/styled';
import filterIcon from '../../assets/icons/filterIcon.svg';
import { Button } from './Button';
import calendarIcon from '../../assets/icons/calendarIcon.svg';
import locationIcon from '../../assets/icons/locationIcon.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 30% 15% 15%;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  height: 30px;
  width: 100%;
  background-color: ${props => props.theme.colors.elements_bg};
`;

const FilterIcon = styled.img`
  grid-column: 1 / 2;
  width: 28px;
  height: auto;
  justify-self: center;
  align-self: center;
`;

const PriorityFilter = styled.div`
  grid-column: 2 / 3;
  justify-self: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.colors.background};
`;

const StatusFilter = styled.div`
  grid-column: 3 / 4;
  justify-self: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.colors.background};
`;

const DateFilter = styled.div`
  grid-column: 4 / 5;
  justify-self: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.colors.background};
`;

const LocationFilter = styled.div`
  grid-column: 5 / 6;
  justify-self: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.colors.background};
`;

const IconWrapper = styled.img`
  width: 20px;
  height: 20px;
`;

export default function Filter() {
  return (
    <Wrapper>
      <FilterIcon src={filterIcon}></FilterIcon>
      <PriorityFilter>
        <Button>PRIORITY</Button>
      </PriorityFilter>
      <StatusFilter>
        <Button>STATUS</Button>
      </StatusFilter>
      <DateFilter>
        <Button>
          <IconWrapper src={calendarIcon}></IconWrapper>
        </Button>
      </DateFilter>
      <LocationFilter>
        <Button>
          <IconWrapper src={locationIcon}></IconWrapper>
        </Button>
      </LocationFilter>
    </Wrapper>
  );
}
