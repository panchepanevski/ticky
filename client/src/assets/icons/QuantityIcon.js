import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.colors.primary};
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    fill: ${props => props.theme.colors.tertiary};
  }
`;

export default function QuantityIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#EFEFEF"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" />
    </Svg>
  );
}
