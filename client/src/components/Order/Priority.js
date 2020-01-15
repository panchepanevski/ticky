import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const backgroundColors = {
  normal: '#21AAFF',
  medium: '#FF9B00',
  high: '#FF434C'
};

const PriorityBox = styled.select`
  width: 60px;
  height: 12px;
  margin-left: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
  color: transparent;
  background-color: ${props => backgroundColors[props.value]};
  outline: none;
`;

export default function Priority({ orderId, value }) {
  const [priorityValue, setPriorityValue] = React.useState(value);

  async function handlePriority(value) {
    setPriorityValue(value);
    await fetch(`/api/orders/${orderId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        priority: value
      })
    });
  }

  return (
    <PriorityBox
      value={priorityValue}
      onChange={event => {
        handlePriority(event.target.value);
      }}
    >
      <option value="normal">Normal</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </PriorityBox>
  );
}

Priority.propTypes = {
  orderId: PropTypes.string,
  value: PropTypes.string
};
