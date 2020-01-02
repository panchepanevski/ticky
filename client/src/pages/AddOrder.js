import React from 'react';
import styled from '@emotion/styled';
import { InputLabel } from '../components/InputFields/InputLabel';
import { InputField } from '../components/InputFields/InputField';
import { InputDescription } from '../components/InputFields/InputDescription';
import { SubmitButton } from '../components/InputFields/SubmitButton';
import { TextStyledH1 } from '../components/TextStyledH1';
import PriorityRadioButtons from '../components/InputFields/PriorityRadioButtons';

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15px 0 0 15px;
`;

const WrapperRadioButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 98%;
`;

export default function AddOrder() {
  const [name, setName] = React.useState('');
  const [serial, setSerial] = React.useState('');
  const [manufacturer, setManufacturer] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [orderedby, setOrderedby] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [description, setDescription] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch('http://localhost:8080/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        serial,
        manufacturer,
        quantity,
        orderedby,
        priority,
        description
      })
    });

    setName('');
    setSerial('');
    setManufacturer('');
    setQuantity('');
    setOrderedby('');
    setPriority('');
    setDescription('');
  }

  return (
    <InputForm onSubmit={handleSubmit}>
      <TextStyledH1>Add Order</TextStyledH1>
      <InputLabel>Name of the required part</InputLabel>
      <InputField
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        autoFocus
        required
      />
      <InputLabel>Serial Number</InputLabel>
      <InputField
        type="text"
        value={serial}
        onChange={event => setSerial(event.target.value)}
        required
      />
      <InputLabel>Manufacturer</InputLabel>
      <InputField
        type="text"
        value={manufacturer}
        onChange={event => setManufacturer(event.target.value)}
        required
      />
      <InputLabel>Quantity</InputLabel>
      <InputField
        type="text"
        value={quantity}
        onChange={event => setQuantity(event.target.value)}
        required
      />
      <InputLabel>Ordered by</InputLabel>
      <InputField
        type="text"
        value={orderedby}
        onChange={event => setOrderedby(event.target.value)}
        required
      />
      <InputLabel>Priority</InputLabel>
      <WrapperRadioButtons onChange={event => setPriority(event.target.value)}>
        <PriorityRadioButtons name="priority" value="normal" field="Normal" required>
          Normal
        </PriorityRadioButtons>
        <PriorityRadioButtons name="priority" value="medium" field="Medium" required>
          Medium
        </PriorityRadioButtons>
        <PriorityRadioButtons name="priority" value="high" field="High" required>
          High
        </PriorityRadioButtons>
      </WrapperRadioButtons>
      <InputLabel>Description</InputLabel>
      <InputDescription
        type="text"
        rows="10"
        value={description}
        onChange={event => setDescription(event.target.value)}
        required
      />
      <SubmitButton>Add Order</SubmitButton>
    </InputForm>
  );
}
