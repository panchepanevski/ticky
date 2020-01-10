import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logoSmall.svg';

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const LogoWrapper = styled.img`
  width: auto;
  height: 150px;
  backface-visibility: visible !important;
  animation: flipIn 1s;

  @keyframes flipIn {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
`;

const LogoText = styled.h1`
  font-size: 24px;
  letter-spacing: 9px;
  animation: flipIn 1.3s;

  @keyframes flipIn {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }
    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }
    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
      transform: perspective(400px);
    }
  }
`;

const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: auto;
  height: auto;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  text-decoration: none;
`;

export default function Landing() {
  return (
    <PageWrapper>
      <Button to="/">
        <LogoWrapper src={logo} />
        <LogoText>TICKY</LogoText>
      </Button>
    </PageWrapper>
  );
}
