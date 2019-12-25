import React from 'react';
import { InputName } from '../components/InputFields/InputName';
import { InputLocation } from '../components/InputFields/InputLocation';
import { InputAssignedBy } from '../components/InputFields/InputAssignedBy';
import { InputTimeDate } from '../components/InputFields/InputDateTime';
import { InputDescription } from '../components/InputFields/InputDescription';
import { SubmitButton } from '../components/InputFields/SubmitButton';
import { InputLabel } from '../components/InputFields/InputLabel';
import { TextStyledH1 } from '../components/TextStyledH1';
import { InputForm } from '../components/InputFields/InputForm';
import StatusRadioButtons from '../components/InputFields/StatusRadioButtons';
import { WrapperRadioButtons } from '../components/InputFields/WrapperRadioButtons';
import PriorityRadioButtons from '../components/InputFields/PriorityRadioButtons';

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
      <InputName
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        required
      />
      <InputLabel>Date and Time</InputLabel>
      <InputTimeDate
        type="datetime"
        value={timedate}
        onChange={event => setTimedate(event.target.value)}
        required
      />
      <InputLabel>Assigned by</InputLabel>
      <InputAssignedBy
        type="text"
        value={assigned}
        onChange={event => setAssigned(event.target.value)}
        required
      />
      <InputLabel>Location</InputLabel>
      <InputLocation value={location} onChange={event => setLocation(event.target.value)} required>
        <option value="select">Select Location</option>
        <option value="east">East Building</option>
        <option value="west">West Building</option>
        <option value="south">South Building</option>
        <option value="north">North Building</option>
      </InputLocation>
      <InputLabel>Status</InputLabel>
      <WrapperRadioButtons onChange={event => setStatus(event.target.value)}>
        <StatusRadioButtons name="status" value="active" field="Active" required />
        <StatusRadioButtons name="status" value="inprogress" field="In progress" required />
        <StatusRadioButtons name="status" value="completed" field="Completed" required />
      </WrapperRadioButtons>
      <InputLabel>Priority</InputLabel>
      <WrapperRadioButtons onChange={event => setPriority(event.target.value)}>
        <PriorityRadioButtons name="priority" value="normal" field="Normal" required />
        <PriorityRadioButtons name="priority" value="medium" field="Medium" required />
        <PriorityRadioButtons name="priority" value="high" field="High" required />
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
