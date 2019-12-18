import React from 'react';
import styled from '@emotion/styled';
import AddTicketButton from './AddTicketButton';
import AddOrderButton from './AddOrderButton';

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 20% 30% 20% 20% 5%;
  grid-template-rows: 80px;
  justify-items: center;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #221f31;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <AddOrderButton />
      <AddTicketButton />
    </HeaderWrapper>
  );
}
