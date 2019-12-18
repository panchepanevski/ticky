import React from 'react';
import styled from '@emotion/styled';

const NavigationButton = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;
  text-decoration: none;
  margin: 20px;
  height: 32px;
  width: 32px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
`;

export default function Button({ onClick }) {
  return <NavigationButton onClick={onClick} />;
}
