import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.tertiary};
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    fill: ${props => props.theme.colors.primary};
  }
`;

export default function FilterIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Svg>
  );
}
