import React from 'react';
import styled from '@emotion/styled';

const StatusBox = styled.select`
  width: 60px;
  height: 12px;
  margin-left: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: ${props => (props.value === 'active' ? '#44FE76' : 'none')};
  background-color: ${props => (props.value === 'inprogress' ? '#E8E200' : 'none')};
  background-color: ${props => (props.value === 'completed' ? '#727272' : 'none')};
  color: ${props => (props.value === 'active' ? '#44FE76' : 'none')};
  color: ${props => (props.value === 'inprogress' ? '#E8E200' : 'none')};
  color: ${props => (props.value === 'completed' ? '#727272' : 'none')};
`;

export default function Status({ ticketId, value }) {
  const [statusValue, setStatusValue] = React.useState(value);

  async function handleStatus(value) {
    setStatusValue(value);
    await fetch(`http://localhost:8080/tickets/${ticketId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: value
      })
    });
  }

  return (
    <StatusBox
      value={statusValue}
      onChange={event => {
        handleStatus(event.target.value);
      }}
    >
      <option value="active">Active</option>
      <option value="inprogress">In Progress</option>
      <option value="completed">Completed</option>
    </StatusBox>
  );
}
