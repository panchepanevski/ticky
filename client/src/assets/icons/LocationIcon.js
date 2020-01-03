import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.primary};
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    fill: ${props => props.theme.colors.tertiary};
  }
`;

export default function LocationIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
    </Svg>
  );
}
