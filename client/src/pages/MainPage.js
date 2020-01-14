import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/logo/logoSmall.svg';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const LogoWrapper = styled.img`
  margin-top: 70px;
  width: auto;
  height: 70px;
  backface-visibility: visible !important;
  animation: fadeInDown 1.5s;
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInDown {
    animation-name: fadeInDown;
  }
`;

const LogoText = styled.h1`
  font-size: 14px;
  letter-spacing: 3px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  animation: fadeInDown 1.8s;
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInDown {
    animation-name: fadeInDown;
  }
`;

const LinksWrapper = styled.div`
  margin-top: 150px;
`;

const Links = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 18px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 3px;
  text-shadow: 1px 1px 1px #000000;
  margin: 20px;
  color: ${props => props.theme.colors.primary};
  animation: fadeInUp 1.5s;
  &:hover,
  &:active {
    color: ${props => props.theme.colors.tertiary};
    transition: 0.4s;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
`;

const Span = styled.span`
  font-size: 24px;
  margin-left: 1px;
  color: ${props => props.theme.colors.tertiary};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export default function StartPage() {
  return (
    <PageWrapper>
      <LogoWrapper src={logo} />
      <LogoText>TICKY</LogoText>
      <LinksWrapper>
        <Links to="/tickets">
          Tickets<Span>&rsaquo;</Span>
        </Links>
        <Links to="/orders">
          Orders<Span>&rsaquo;</Span>
        </Links>
      </LinksWrapper>
    </PageWrapper>
  );
}
