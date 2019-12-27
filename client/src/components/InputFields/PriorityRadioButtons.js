import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 98%;
`;

export const Input = styled.input`
  margin: 5px;
`;

// PRIORITY NORMAL
export const NormalLabel = styled.label`
  width: 110px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 1px;
  font-size: 14px;
  text-shadow: 1px 1px 1px #000000;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.priority_normal};
  border-radius: 10px;
  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.priority_normal_hover};
    cursor: pointer;
    transition: 0.3s;
  }
`;

// PRIORITY MEDIUM
export const MediumLabel = styled.label`
  width: 110px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 1px;
  font-size: 14px;
  text-shadow: 1px 1px 1px #000000;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.priority_medium};
  border-radius: 10px;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.priority_medium_hover};
    cursor: pointer;
    transition: 0.3s;
  }
`;

// PRIORITY HIGH
export const HighLabel = styled.label`
  width: 110px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 1px;
  font-size: 14px;
  text-shadow: 1px 1px 1px #000000;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.priority_high};
  border-radius: 10px;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.priority_high_hover};
    cursor: pointer;
    transition: 0.3s;
  }
`;
