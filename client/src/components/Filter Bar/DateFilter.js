import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1% 70% 5% 24%;
  grid-template-rows: 1fr;
  width: auto;
  height: 40px;
  margin: 10px 0;
`;

const WrapperAllFilter = styled.div`
  grid-column: 4 / 5;
`;

const DateInput = styled.input`
  grid-column: 2 / 3;
  align-self: center;
  height: 30px;
  color: ${props => props.theme.colors.primary};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
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

const ONE_DAY = 1000 * 60 * 60 * 24;
export default function DateFilter() {
  let history = useHistory();

  function handleChange(value) {
    const testDate = new Date(value);
    history.push(
      `/?timestamp_gte=${testDate.getTime()}&timestamp_lte=${testDate.getTime() + ONE_DAY - 1}`
    );
  }

  return (
    <Wrapper>
      <DateInput type="date" onChange={event => handleChange(event.target.value)} />
      <WrapperAllFilter>
        <Button>
          <AllCircle />
          <LinkQuery to="/">All</LinkQuery>
        </Button>
      </WrapperAllFilter>
    </Wrapper>
  );
}
