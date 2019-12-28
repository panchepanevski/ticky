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
      if (props.field === 'Active') {
        return props.theme.colors.status_active;
      } else if (props.field === 'In Progress') {
        return props.theme.colors.status_in_progres;
      } else if (props.field === 'Completed') {
        return props.theme.colors.status_completed;
      } else console.error('This is not a function!!!!');
    }};

  &:hover,
  &:active {
    background-color: ${props => {
      if (props.field === 'Active') {
        return props.theme.colors.status_active_hover;
      } else if (props.field === 'In Progress') {
        return props.theme.colors.status_in_progres_hover;
      } else if (props.field === 'Completed') {
        return props.theme.colors.status_completed_hover;
      } else console.error('This is not a function!!!!');
    }};
  }
`;

export default function StatusRadioButtons({ name, value, field }) {
  return (
    <Label field={field}>
      <Input type="radio" value={value} name={name} />
      {field}
    </Label>
  );
}
