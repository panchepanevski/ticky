import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Input = styled.input`
  margin: 7px;
  opacity: 0;
  position: absolute;
`;

const Label = styled.label`
  width: 110px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px;
  font-size: 14px;
  text-shadow: 1px 1px 1px #000000;
  background-color: ${props => {
    if (props.field === 'Active' && props.active) {
      return props.theme.colors.status_active_hover;
    } else if (props.field === 'In Progress' && props.active) {
      return props.theme.colors.status_in_progres_hover;
    } else if (props.field === 'Completed' && props.active) {
      return props.theme.colors.status_completed_hover;
    } else if (props.field === 'Normal' && props.active) {
      return props.theme.colors.priority_normal_hover;
    } else if (props.field === 'Medium' && props.active) {
      return props.theme.colors.priority_medium_hover;
    } else if (props.field === 'High' && props.active) {
      return props.theme.colors.priority_high_hover;
    } else console.error('Error!');
  }};
  border-radius: 5px;
  border: 1px solid
    ${props => {
      if (props.field === 'Active') {
        return props.theme.colors.status_active;
      } else if (props.field === 'In Progress') {
        return props.theme.colors.status_in_progres;
      } else if (props.field === 'Completed') {
        return props.theme.colors.status_completed;
      } else if (props.field === 'Normal') {
        return props.theme.colors.priority_normal;
      } else if (props.field === 'Medium') {
        return props.theme.colors.priority_medium;
      } else if (props.field === 'High') {
        return props.theme.colors.priority_high;
      } else console.error('Error!');
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
      } else if (props.field === 'Normal') {
        return props.theme.colors.priority_normal_hover;
      } else if (props.field === 'Medium') {
        return props.theme.colors.priority_medium_hover;
      } else if (props.field === 'High') {
        return props.theme.colors.priority_high_hover;
      } else console.error('Error!');
    }};
  }
`;

export default function RadioButton({ name, value, field, active }) {
  return (
    <>
      <Label active={active} field={field}>
        {field}
        <Input type="radio" value={value} name={name} />
      </Label>
    </>
  );
}

RadioButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  field: PropTypes.string,
  active: PropTypes.string
};
