import React from 'react';
import styled from '@emotion/styled';

export default function Status(status, idValue) {
  const [statusValue, setStatusValue] = React.useState(status);
  const [id, setId] = React.useState(idValue);

  const StatusBox = styled.select`
    width: 60px;
    height: 12px;
    margin-left: 10px;
    border: none;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
    background-color: ${statusValue === 'active' ? '#44FE76' : 'none'};
    background-color: ${statusValue === 'inprogress' ? '#E8E200' : 'none'};
    background-color: ${statusValue === 'completed' ? '#727272' : 'none'};
    color: ${statusValue === 'active' ? '#44FE76' : 'none'};
    color: ${statusValue === 'inprogress' ? '#E8E200' : 'none'};
    color: ${statusValue === 'completed' ? '#727272' : 'none'};
  `;

  async function handleStatus(value) {
    setId(idValue);
    setStatusValue(value);
    await fetch(`http://localhost:8080/tickets/${id}`, {
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
        handleStatus(event.target.value, idValue);
      }}
    >
      <option id="" value="active">
        Active
      </option>
      <option id="" value="inprogress">
        In Progress
      </option>
      <option id="" value="completed">
        Completed
      </option>
    </StatusBox>
  );
}
