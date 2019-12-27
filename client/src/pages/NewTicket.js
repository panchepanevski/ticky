import React from 'react';
import styled from '@emotion/styled';
import { InputLabel } from '../components/InputFields/InputLabel';
import { InputField } from '../components/InputFields/InputField';
import { InputSelectBox } from '../components/InputFields/InputSelectBox';
import { InputDescription } from '../components/InputFields/InputDescription';
import { SubmitButton } from '../components/InputFields/SubmitButton';
import { TextStyledH1 } from '../components/TextStyledH1';
import {
  Wrapper,
  Input,
  ActiveLabel,
  InProgressLabel,
  CompletedLabel
} from '../components/InputFields/StatusRadioButtons';
import {
  NormalLabel,
  MediumLabel,
  HighLabel
} from '../components/InputFields/PriorityRadioButtons';

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15px 0 0 15px;
`;

export default function NewTicket() {
  const now = new Date().toLocaleString();
  const [name, setName] = React.useState('');
  const [timedate, setTimedate] = React.useState(now);
  const [assigned, setAssigned] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [details, setDetails] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch('http://localhost:8080/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, timedate, assigned, location, status, priority, details })
    });

    setName('');
    setTimedate('');
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
        type="datetime"
        value={timedate}
        onChange={event => setTimedate(event.target.value)}
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
        <option value="east">East Building</option>
        <option value="west">West Building</option>
        <option value="south">South Building</option>
        <option value="north">North Building</option>
      </InputSelectBox>
      <InputLabel>Status</InputLabel>
      <Wrapper onChange={event => setStatus(event.target.value)}>
        <ActiveLabel>
          <Input type="radio" name="status" value="active" />
          Active
        </ActiveLabel>
        <InProgressLabel>
          <Input type="radio" name="status" value="inprogress" />
          In Progress
        </InProgressLabel>
        <CompletedLabel>
          <Input type="radio" name="status" value="completed" />
          Completed
        </CompletedLabel>
      </Wrapper>
      <InputLabel>Priority</InputLabel>
      <Wrapper onChange={event => setPriority(event.target.value)}>
        <NormalLabel>
          <Input type="radio" name="priority" value="normal" />
          Normal
        </NormalLabel>
        <MediumLabel>
          <Input type="radio" name="priority" value="medium" />
          Medium
        </MediumLabel>
        <HighLabel>
          <Input type="radio" name="priority" value="high" />
          High
        </HighLabel>
      </Wrapper>
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
