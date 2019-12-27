import styled from '@emotion/styled';
import React from 'react';

const SelectBoxWrapper = styled.select`
  width: 20%;
  height: 23px;
  padding: 5px;
  background-color: transparent;
  box-shadow: 2px 2px 2px #000000;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 10px;
  outline: none;
`;

export default function SelectBox() {
  return (
    <SelectBoxWrapper>
      Status:
      <option value="active" selected={status}>
        active
      </option>
      <option value="inprogress" selected={status}>
        in progress
      </option>
      <option value="completed" selected={status}>
        completed
      </option>
    </SelectBoxWrapper>
  );
}
