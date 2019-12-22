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
  color: ${props => props.theme.colors.primary};
  &:hover,
  &:active {
    color: ${props => props.theme.colors.thertiary};
    transition: 0.4s;
  }
`;

export default function AddTicketButton() {
  return (
    <ButtonWrapper>
      <ButtonLink to="/">back</ButtonLink>
    </ButtonWrapper>
  );
}
