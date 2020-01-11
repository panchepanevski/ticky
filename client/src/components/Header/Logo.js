import React from 'react';
import styled from '@emotion/styled';
import logo from '../../assets/logo/logoSmall.svg';
import { Link } from 'react-router-dom';

const LogoWrapper = styled.img`
  grid-column: 2 / 3;
  width: auto;
  height: 50px;
`;

const HomeLink = styled(Link)`
  grid-column: 2 / 3;
  width: auto;
  height: 50px;
`;

export default function Logo() {
  return (
    <HomeLink to="/startpage">
      <LogoWrapper src={logo}></LogoWrapper>
    </HomeLink>
  );
}
