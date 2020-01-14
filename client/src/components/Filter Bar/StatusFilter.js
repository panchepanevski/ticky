import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.1% 23% 33% 31% 18%;
  grid-template-rows: 1fr;
  width: auto;
  height: 40px;
  margin: 10px 0;
`;

const WrapperActive = styled.div`
  grid-column: 2 / 3;
`;

const WrapperInProgress = styled.div`
  grid-column: 3 / 4;
`;

const WrapperCompleted = styled.div`
  grid-column: 4 / 5;
`;

const WrapperAll = styled.div`
  grid-column: 5 / 6;
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

const ActiveCircle = styled.div`
  position: absolute;
  grid-column: 2 / 3;
  width: 13px;
  height: 13px;
  border-radius: 30%;
  background-color: ${props => props.theme.colors.status_active};
  margin-top: 1px;
  margin-right: 12px;
`;

const InProgressCircle = styled.div`
  position: absolute;
  grid-column: 2 / 3;
  width: 13px;
  height: 13px;
  border-radius: 30%;
  background-color: ${props => props.theme.colors.status_in_progres};
  margin-top: 1px;
`;

const CompletedCircle = styled.div`
  position: absolute;
  grid-column: 2 / 3;
  width: 13px;
  height: 13px;
  border-radius: 30%;
  background-color: ${props => props.theme.colors.status_completed};
  margin-top: 1px;
  margin-right: -20px;
`;

const AllCircle = styled.div`
  position: absolute;
  grid-column: 2 / 3;
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

export default function StatusFilter() {
  return (
    <Wrapper>
      <WrapperActive>
        <Button>
          <ActiveCircle />
          <LinkQuery to="/tickets/?status=active">Active</LinkQuery>
        </Button>
      </WrapperActive>
      <WrapperInProgress>
        <Button>
          <InProgressCircle />
          <LinkQuery to="/tickets/?status=inprogress">In progress</LinkQuery>
        </Button>
      </WrapperInProgress>
      <WrapperCompleted>
        <Button>
          <CompletedCircle />
          <LinkQuery to="/tickets/?status=completed">Completed</LinkQuery>
        </Button>
      </WrapperCompleted>
      <WrapperAll>
        <Button>
          <AllCircle />
          <LinkQuery to="/tickets/">All</LinkQuery>
        </Button>
      </WrapperAll>
    </Wrapper>
  );
}
