import React from 'react';
import styled from '@emotion/styled';
import Search from './Search';
import SearchButton from './SearchButton';

const FilterBar = styled.div`
  display: grid;
  grid-template-columns: 2% 70% 6% 20% 2%;
  grid-template-rows: auto;
  width: 100%;
  height: 40px;
  margin-top: 15px;
`;

const InputWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  justify-self: center;
  align-self: center;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  grid-area: 1 / 4 / 2 / 5;
  justify-self: center;
  align-self: center;
  margin-top: 3px;
`;

export default function FilterBarOrders() {
  return (
    <FilterBar>
      <InputWrapper>
        <Search />
      </InputWrapper>
      <ButtonWrapper>
        <SearchButton />
      </ButtonWrapper>
    </FilterBar>
  );
}
