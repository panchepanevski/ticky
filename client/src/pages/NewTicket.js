import React from 'react';
import styled from '@emotion/styled';
import { InputLabel } from '../components/InputFields/InputLabel';
import { InputField } from '../components/InputFields/InputField';
import { InputSelectBox } from '../components/InputFields/InputSelectBox';
import { InputDescription } from '../components/InputFields/InputDescription';
import { SubmitButton } from '../components/InputFields/SubmitButton';
import { TextStyledH1 } from '../components/TextStyledH1';
import RadioButton from '../components/InputFields/RadioButton';

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

export default function NewTicket() {
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [assigned, setAssigned] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [details, setDetails] = React.useState('');

  let isoDateString = date.toISOString();
  isoDateString = isoDateString.substring(0, 19);

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch('http://localhost:8080/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        timestamp: date.getTime(),
        assigned,
        location,
        status,
        priority,
        details
      })
    });

    setName('');
    setDate(new Date());
    setAssigned('');
    setLocation('');
    setStatus('');
    setPriority('');
    setDetails('');
  }

  return (
    <InputForm onSubmit={handleSubmit}>
      <TextStyledH1>Add Ticket</TextStyledH1>
      <InputLabel>Ticket name</InputLabel>
      <InputField
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        autoFocus
        required
      />
      <InputLabel>Date and Time</InputLabel>
      <InputField
        type="datetime-local"
        defaultValue={isoDateString}
        onChange={event => setDate(new Date(event.target.value))}
        required
      />
      <InputLabel>Assigned by</InputLabel>
      <InputField
        type="text"
        value={assigned}
        onChange={event => setAssigned(event.target.value)}
        required
      />
      <InputLabel>Location</InputLabel>
      <InputSelectBox value={location} onChange={event => setLocation(event.target.value)} required>
        <option value="select">Select Location</option>
        <option value="east-building">East Building</option>
        <option value="west-building">West Building</option>
        <option value="south-building">South Building</option>
        <option value="north-building">North Building</option>
      </InputSelectBox>

      <InputLabel>Status</InputLabel>
      <WrapperRadioButtons onChange={event => setStatus(event.target.value)}>
        <RadioButton
          active={status.includes('active')}
          name="status"
          value="active"
          field="Active"
          required
        >
          Active
        </RadioButton>
        <RadioButton
          active={status.includes('inprogress')}
          name="status"
          value="inprogress"
          field="In Progress"
          required
        >
          In Progress
        </RadioButton>
        <RadioButton
          active={status.includes('completed')}
          name="status"
          value="completed"
          field="Completed"
          required
        >
          Completed
        </RadioButton>
      </WrapperRadioButtons>

      <InputLabel>Priority</InputLabel>
      <WrapperRadioButtons onChange={event => setPriority(event.target.value)}>
        <RadioButton
          active={priority.includes('normal')}
          name="priority"
          value="normal"
          field="Normal"
          required
        >
          Normal
        </RadioButton>
        <RadioButton
          active={priority.includes('medium')}
          name="priority"
          value="medium"
          field="Medium"
          required
        >
          Medium
        </RadioButton>
        <RadioButton
          active={priority.includes('high')}
          name="priority"
          value="high"
          field="High"
          required
        >
          High
        </RadioButton>
      </WrapperRadioButtons>
      <InputLabel>Description</InputLabel>
      <InputDescription
        type="text"
        rows="10"
        value={details}
        onChange={event => setDetails(event.target.value)}
        required
      />
      <SubmitButton>Add Ticket</SubmitButton>
    </InputForm>
  );
}
