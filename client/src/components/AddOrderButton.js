import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ButtonWrapper = styled.div`
  grid-column: 4 / 5;
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
    color: ${props => props.theme.colors.tertiary};
    transition: 0.4s;
  }
`;

const Span = styled.span`
  font-size: 22px;
  margin-right: 3px;
`;

export default function AddOrderButton() {
  return (
    <ButtonWrapper>
      <ButtonLink>
        <Span>&#43;</Span>order
      </ButtonLink>
    </ButtonWrapper>
  );
}
