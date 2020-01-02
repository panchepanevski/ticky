import React from 'react';
import styled from '@emotion/styled';
import { InputLabel } from '../components/InputFields/InputLabel';
import { InputField } from '../components/InputFields/InputField';
import { InputSelectBox } from '../components/InputFields/InputSelectBox';
import { InputDescription } from '../components/InputFields/InputDescription';
import { SubmitButton } from '../components/InputFields/SubmitButton';
import { TextStyledH1 } from '../components/TextStyledH1';
import PriorityRadioButtons from '../components/InputFields/PriorityRadioButtons';
import StatusRadioButtons from '../components/InputFields/StatusRadioButtons';

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
  const now = new Date().toLocaleString();
  const [name, setName] = React.useState('');
  const [timedate, setTimedate] = React.useState(now);
  const [assigned, setAssigned] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const [details, setDetails] = React.useState('');
  const [progress, setProgress] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch('http://localhost:8080/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        timedate,
        assigned,
        location,
        status,
        priority,
        details,
        progress
      })
    });

    setName('');
    setTimedate('');
    setAssigned('');
    setLocation('');
    setStatus('');
    setPriority('');
    setDetails('');
    setProgress('');
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
      <WrapperRadioButtons onChange={event => setStatus(event.target.value)}>
        <StatusRadioButtons name="status" value="active" field="Active" required>
          Active
        </StatusRadioButtons>
        <StatusRadioButtons name="status" value="inprogress" field="In Progress" required>
          In Progress
        </StatusRadioButtons>
        <StatusRadioButtons name="status" value="completed" field="Completed" required>
          Completed
        </StatusRadioButtons>
      </WrapperRadioButtons>
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
        value={details}
        onChange={event => setDetails(event.target.value)}
        required
      />
      <SubmitButton>Add Ticket</SubmitButton>
    </InputForm>
  );
}
