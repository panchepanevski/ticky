import React from 'react';
import styled from '@emotion/styled';

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
  border: 1px solid
    ${props => {
      if (props.field === 'Normal') {
        return props.theme.colors.priority_normal;
      } else if (props.field === 'Medium') {
        return props.theme.colors.priority_medium;
      } else if (props.field === 'High') {
        return props.theme.colors.priority_high;
      } else console.error('This is not a function!!!!');
    }};

  &:hover,
  &:active {
    background-color: ${props => {
      if (props.field === 'Normal') {
        return props.theme.colors.priority_normal_hover;
      } else if (props.field === 'Medium') {
        return props.theme.colors.priority_medium_hover;
      } else if (props.field === 'High') {
        return props.theme.colors.priority_high_hover;
      } else console.error('This is not a function!!!!');
    }};
  }
`;

export default function PriorityRadioButtons({ name, value, field }) {
  return (
    <Label field={field}>
      <Input type="radio" value={value} name={name} />
      {field}
    </Label>
  );
}
