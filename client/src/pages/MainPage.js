import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 50% 50%;
`;

const Tickets = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 2;
  background-color: ${props => props.theme.colors.elements_bg};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
`;

const Orders = styled.div`
  grid-column: 1 / 1;
  grid-row: 2 / 3;
  background-color: ${props => props.theme.colors.elements_bg};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
`;

const LinkPath = styled(Link)`
  align-self: center;
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

export default function MainPage() {
  return (
    <Wrapper>
      <Tickets>
        <LinkPath to="/tickets">Ticket List</LinkPath>
      </Tickets>
      <Orders>
        <LinkPath to="/orders">Orders List</LinkPath>
      </Orders>
    </Wrapper>
  );
}
