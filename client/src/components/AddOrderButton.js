import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ButtonWrapper = styled.div`
  grid-column: 4 / 5;
`;

const ButtonLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  /* border-bottom: #e8de00 0.1em solid; */
  font-size: 18px;
  font-weight: 900;
  text-shadow: 1px 1px 1px #000000;
  color: #efefef;
  &:hover,
  &:active {
    color: #5d38ff;
  }
`;

export default function AddTicketButton() {
  return (
    <ButtonWrapper>
      <ButtonLink>order</ButtonLink>
    </ButtonWrapper>
  );
}
