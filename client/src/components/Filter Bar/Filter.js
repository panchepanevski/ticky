import React from 'react';
import styled from '@emotion/styled';
import filterIcon from '../../assets/icons/filterIcon.svg';
import { Button } from './Button';

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

export default function Filter() {
  return (
    <Wrapper>
      <FilterIcon src={filterIcon}></FilterIcon>
      <PriorityFilter>
        <Button>PRIORITY</Button>
      </PriorityFilter>
      <StatusFilter>STATUS</StatusFilter>
      <DateFilter>D</DateFilter>
      <LocationFilter>L</LocationFilter>
    </Wrapper>
  );
}
