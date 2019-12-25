import styled from '@emotion/styled';

export const InputAssignedBy = styled.input`
  width: 95%;
  height: 33px;
  padding: 10px;
  background-color: transparent;
  box-shadow: 2px 2px 2px #000000;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  outline: none;
  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid ${props => props.theme.colors.tertiary};
    transition: 0.2s;
  }
`;
