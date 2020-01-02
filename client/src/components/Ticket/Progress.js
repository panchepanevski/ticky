import React from 'react';
import styled from '@emotion/styled';

const Slider = styled.input`
  -webkit-appearance: none;
  width: 60%;
  height: 12px;
  border-radius: 5px;
  margin: 10px;
  background: linear-gradient(
    90deg,
    rgb(33, 243, 255) ${props => props.value}%,
    rgb(239, 239, 239) 0%
  );
  outline: none;
  transition: opacity 0.2s;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    border: 1px solid ${props => props.theme.elements_bg};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    border: 1px solid ${props => props.theme.elements_bg};
    cursor: pointer;
  }
`;

export default function Progress({ value, onChange }) {
  return (
    <>
      <Slider type="range" min="1" max="100" value={value} onChange={onChange} />
      {value} %
    </>
  );
}