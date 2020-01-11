import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/logo/logoSmall.svg';
import { Redirect } from 'react-router-dom';

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-left: 5px;
  animation: flipIn 1.3s;
  display: flex;
  justify-content: center;
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

export default function StartPage() {
  const [redirect, setRedirect] = React.useState(false);

  function toTicketPage() {
    setTimeout(() => setRedirect(true), 1500);
  }

  toTicketPage();

  return (
    <PageWrapper>
      {redirect ? <Redirect to="/" /> : true}
      <LogoWrapper src={logo} />
      <LogoText>TICKY</LogoText>
    </PageWrapper>
  );
}
