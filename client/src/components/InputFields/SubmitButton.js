import styled from '@emotion/styled';

export const SubmitButton = styled.button`
  align-self: center;
  width: 35%;
  height: 33px;
  margin: 30px 0 30px 0;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px 5px 5px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  text-transform: uppercase;
  outline: none;
  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid ${props => props.theme.colors.thertiary};
    transition: 0.2s;
  }
`;
