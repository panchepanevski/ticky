import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  text-shadow: 1px 1px 1px 1px #000000;
  border: none;
  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.tertiary};
  }
`;
