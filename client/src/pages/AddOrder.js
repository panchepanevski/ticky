import React from 'react';
import styled from '@emotion/styled';
import { InputLabel } from '../components/OrderInputFields/InputLabel';
import { InputField } from '../components/OrderInputFields/InputField';
import { InputDescription } from '../components/OrderInputFields/InputDescription';
import { SubmitButton } from '../components/OrderInputFields/SubmitButton';
import { TextStyledH1 } from '../components/TextStyledH1';

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15px 0 0 15px;
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
