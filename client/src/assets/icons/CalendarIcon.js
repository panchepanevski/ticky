import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.primary};
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    fill: ${props => props.theme.colors.tertiary};
  }
`;

export default function CalendarIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" {...props}>
      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Svg>
  );
}
