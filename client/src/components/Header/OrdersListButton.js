import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ButtonWrapper = styled.div`
  grid-column: 4 / 5;
`;

const ButtonLink = styled(Link)`
  display: flex;
  align-content: center;
  align-items: center;
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
  font-size: 26px;
  margin-right: 5px;
  color: ${props => props.theme.colors.tertiary};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export default function OrdersListButton() {
  return (
    <ButtonWrapper>
      <ButtonLink to="/orderlist">
        <Span>&#x02255;</Span>Orders
      </ButtonLink>
    </ButtonWrapper>
  );
}
