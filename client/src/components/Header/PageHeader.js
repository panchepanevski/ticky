import React from 'react';
import styled from '@emotion/styled';
import BackButton from '../Header/BackButton';
import Logo from '../Header/Logo';

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 20% 20% 25% 25% 5%;
  grid-template-rows: 80px;
  justify-items: center;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: ${props => props.theme.colors.elements_bg};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
`;

export default function TicketHeader() {
  return (
    <HeaderWrapper>
      <Logo />
      <BackButton />
    </HeaderWrapper>
  );
}
