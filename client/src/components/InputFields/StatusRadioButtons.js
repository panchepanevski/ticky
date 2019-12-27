import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 98%;
`;

export const Input = styled.input`
  margin: 5px;
`;

// STATUS ACTIVE
export const ActiveLabel = styled.label`
  width: 110px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 1px;
  font-size: 14px;
  text-shadow: 1px 1px 1px #000000;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.status_active};
  border-radius: 10px;
  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.status_active_hover};
    cursor: pointer;
    transition: 0.3s;
  }
`;

// STATUS IN PROGRESS
export const InProgressLabel = styled.label`
  width: 110px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 1px;
  font-size: 14px;
  text-shadow: 1px 1px 1px #000000;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.status_in_progres};
  border-radius: 10px;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.status_in_progres_hover};
    cursor: pointer;
    transition: 0.3s;
  }
`;

// STATUS COMPLETE
export const CompletedLabel = styled.label`
  width: 110px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 1px;
  font-size: 14px;
  text-shadow: 1px 1px 1px #000000;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.status_completed};
  border-radius: 10px;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.status_completed_hover};
    cursor: pointer;
    transition: 0.3s;
  }
`;
