import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.tertiary};
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    fill: ${props => props.theme.colors.primary};
  }
`;

export default function CalendarIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </Svg>
  );
}
