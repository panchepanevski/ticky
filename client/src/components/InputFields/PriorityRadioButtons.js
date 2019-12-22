import styled from '@emotion/styled';

// PRIORUTY BOX

export const PriorityWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 98%;
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
  &:hover {
    background-color: rgba(33, 170, 255, 0.3);
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const NormalInput = styled.input`
  margin: 7px;
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
  &:hover {
    background-color: rgba(255, 155, 0, 0.3);
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const MediumInput = styled.input`
  margin: 5px;
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
  &:hover {
    background-color: rgba(255, 67, 76, 0.3);
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const HighInput = styled.input`
  margin: 5px;
`;

// export default function PriorityRadioButtons() {
//   return (
//     <PriorityWrapper>
//       <NormalLabel>
//         <NormalInput type="radio" name="progress" value="normal" />
//         Normal
//       </NormalLabel>
//       <MediumLabel>
//         <MediumInput type="radio" name="progress" value="medium" />
//         Medium
//       </MediumLabel>
//       <HighLabel>
//         <HighInput type="radio" name="progress" value="high" />
//         High
//       </HighLabel>
//     </PriorityWrapper>
//   );
// }
