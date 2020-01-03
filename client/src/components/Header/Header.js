import React from 'react';
import styled from '@emotion/styled';
import Logo from '../Header/Logo';
import AddOrderButton from '../Header/AddOrderButton';
import AddTicketButton from '../Header/AddTicketButton';

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 20% 20% 25% 25% 5%;
  grid-template-rows: 80px;
  justify-items: center;
  align-items: center;
  height: 80px;
  width: 100%;
  margin-bottom: 1px;
  background-color: ${props => props.theme.colors.elements_bg};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <AddOrderButton />
      <AddTicketButton />
    </HeaderWrapper>
  );
}
