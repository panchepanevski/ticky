import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ButtonWrapper = styled.div`
  grid-column: 5 / 6;
`;

const ButtonLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;
  text-shadow: 1px 1px 1px #000000;
  color: #efefef;
  &:hover,
  &:active {
    color: #5d38ff;
    transform: 0.5s;
  }
`;

export default function AddTicketButton() {
  return (
    <ButtonWrapper>
      <ButtonLink>ticket</ButtonLink>
    </ButtonWrapper>
  );
}
