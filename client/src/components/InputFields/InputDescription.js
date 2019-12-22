import styled from '@emotion/styled';

export const InputDescription = styled.textarea`
  width: 95%;
  padding-left: 10px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px 5px 5px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  outline: none;
  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid ${props => props.theme.colors.thertiary};
    transition: 0.2s;
  }
`;
