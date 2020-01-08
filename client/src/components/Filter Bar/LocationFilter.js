import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1% 70% 5% 20%;
  grid-template-rows: 1fr;
  width: auto;
  height: 40px;
  margin: 10px 0;
`;

const WrapperAllFilter = styled.div`
  grid-column: 4 / 5;
`;

const SelectBox = styled.select`
  align-self: center;
  grid-column: 2 / 3;
  height: 30px;
  padding: 1px;
  background-color: transparent;
  box-shadow: 2px 2px 2px #000000;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  outline: none;
  &:hover,
  &:focus {
    transition: 0.4s;
    border: 1px solid ${props => props.theme.colors.tertiary};
    transition: 0.2s;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  outline: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  text-shadow: 1px 1px 1px 1px #000000;
  border: none;
  text-transform: uppercase;
  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.tertiary};
  }
`;

const AllCircle = styled.div`
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 30%;
  background-color: ${props => props.theme.colors.tertiary};
  margin-top: 1px;
  margin-right: -20px;
`;

const LinkQuery = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  text-shadow: 1px 1px 1px #000000;
  color: ${props => props.theme.colors.primary};
`;

export default function LocationFilter() {
  let history = useHistory();

  function handleChange(value) {
    history.push(`/?location=${value}`);
  }

  return (
    <Wrapper>
      <SelectBox onChange={event => handleChange(event.target.value)}>
        <option>Select Location</option>
        <option value="east">East Building</option>
        <option value="west">West Building</option>
        <option value="south">South Building</option>
        <option value="north">North Building</option>
      </SelectBox>
      <WrapperAllFilter>
        <Button>
          <AllCircle />
          <LinkQuery to="/">All</LinkQuery>
        </Button>
      </WrapperAllFilter>
    </Wrapper>
  );
}
