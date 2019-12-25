import React from 'react';
import styled from '@emotion/styled';
import getBorderColor from './getBorderColor';

const Input = styled.input`
  margin: 7px;
`;

const Label = styled.label`
  width: 110px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 1px;
  font-size: 14px;
  text-shadow: 1px 1px 1px #000000;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid ${getBorderColor};
`;

export default function StatusRadioButtons({ name, value, field }) {
  return (
    <Label>
      <Input type="radio" value={value} name={name} />
      {field}
    </Label>
  );
}
