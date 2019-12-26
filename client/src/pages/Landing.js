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
`;

const LogoWrapper = styled.img`
  width: auto;
  height: 150px;
  margin-top: 40%;
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
  justify-content: flex-end;
  font-size: 24px;
  letter-spacing: 9px;
  margin-left: 5px;
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

const GoButton = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
  font-weight: 900;
  text-shadow: 1px 1px 1px #000000;
  color: ${props => props.theme.colors.primary};
  margin-top: 50%;
  animation: fadeOutRight 1s;
  animation-delay: 1.5s;
  backface-visibility: visible !important;
  &:hover,
  &:active {
    color: ${props => props.theme.colors.tertiary};
    transition: 0.4s;

    @keyframes fadeOutRight {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
    }
  }
`;

const Span = styled.span`
  font-size: 22px;
  margin-left: 10px;
  color: ${props => props.theme.colors.tertiary};
  &:hover {
    color: ${props => props.theme.colors.tertiary};
  }
`;

const StyleP = styled.p`
  color: ${props => props.theme.colors.tertiary};
  font-size: 14px;
`;

export default function Landing() {
  return (
    <PageWrapper>
      <LogoWrapper src={logo} />
      <LogoText>TICKY</LogoText>
      <GoButton to="/">
        Lets Go<Span>&rarr;</Span>
      </GoButton>
      <StyleP>Stop starting, start finishing</StyleP>
    </PageWrapper>
  );
}
