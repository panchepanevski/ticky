import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const backgroundColors = {
  active: '#44FE76',
  inprogress: '#E8E200',
  completed: '#727272'
};

const StatusBox = styled.select`
  width: 60px;
  height: 12px;
  margin-left: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: ${props => backgroundColors[props.value]};
  color: transparent;
  outline: none;
`;

export default function Status({ ticketId, value }) {
  const [statusValue, setStatusValue] = React.useState(value);

  async function handleStatus(value) {
    setStatusValue(value);
    await fetch(`/api/tickets/${ticketId}`, {
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

Status.propTypes = {
  ticketId: PropTypes.number,
  value: PropTypes.string
};
