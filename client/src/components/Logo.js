import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/logo/logoSmall.svg';

const LogoWrapper = styled.img`
  grid-column: 2 / 3;
  width: auto;
  height: 50px;
`;

export default function Logo() {
  return <LogoWrapper src={logo}></LogoWrapper>;
}
