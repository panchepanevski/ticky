import styled from '@emotion/styled';

// STATUS BOX

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 98%;
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
  &:hover {
    background-color: rgba(126, 255, 161, 0.3);
    cursor: pointer;
    transition: 0.3s;
  }
  &:active {
    background-color: rgba(126, 255, 161, 0.3);
  }
`;

export const ActiveInput = styled.input`
  margin: 7px;
  &:checked,
  &:active {
    background-color: rgba(126, 255, 161, 0.3);
  }
`;

// STATUS IN PROGRESS

export const ProgressLabel = styled.label`
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
  &:hover {
    background-color: rgba(232, 226, 0, 0.3);
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const ProgressInput = styled.input`
  margin: 5px;
`;

// STATUS COMPLETED

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
  &:hover {
    background-color: rgba(114, 114, 114, 0.3);
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const CompletedInput = styled.input`
  margin: 5px;
`;

// export default function StatusRadioButtons() {
//   return (
//     <ActiveWrapper>
//       <ActiveLabel>
//         <ActiveInput type="radio" name="status" value="active" />
//         Active
//       </ActiveLabel>
//       <ProgressLabel>
//         <ProgressInput type="radio" name="status" value="inprogress" />
//         In progress
//       </ProgressLabel>
//       <CompletedLabel>
//         <CompletedInput type="radio" name="status" value="completed" />
//         Completed
//       </CompletedLabel>
//     </ActiveWrapper>
//   );
// }
