import React from 'react';
import styled from '@emotion/styled';

const PriorityBox = styled.select`
  width: 60px;
  height: 12px;
  margin-left: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: ${props => (props.value === 'normal' ? '#21AAFF' : 'none')};
  background-color: ${props => (props.value === 'medium' ? '#FF9B00' : 'none')};
  background-color: ${props => (props.value === 'high' ? '#FF434C' : 'none')};
  color: ${props => (props.value === 'normal' ? '#21AAFF' : 'none')};
  color: ${props => (props.value === 'medium' ? '#FF9B00' : 'none')};
  color: ${props => (props.value === 'high' ? '#FF434C' : 'none')};
`;

export default function Priority({ orderId, value }) {
  const [priorityValue, setPriorityValue] = React.useState(value);

  async function handlePriority(value) {
    setPriorityValue(value);
    await fetch(`http://localhost:8080/orders/${orderId}`, {
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
