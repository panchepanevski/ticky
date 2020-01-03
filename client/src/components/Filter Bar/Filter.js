import React from 'react';
import styled from '@emotion/styled';
import filterIcon from '../../assets/icons/filterIcon.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 20% 20% 25% 15% 15%;
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
`;

export default function Filter() {
  return (
    <Wrapper>
      <FilterIcon src={filterIcon}></FilterIcon>
    </Wrapper>
  );
}
