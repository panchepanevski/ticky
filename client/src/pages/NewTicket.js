import React from 'react';
import PropTypes from 'prop-types';
import { InputName } from '../components/InputFields/InputName';
import { InputLocation } from '../components/InputFields/InputLocation';
import { InputAssignedBy } from '../components/InputFields/InputAssignedBy';
import { InputTimeDate } from '../components/InputFields/InputDateTime';
import { InputDescription } from '../components/InputFields/InputDescription';
import { SubmitButton } from '../components/InputFields/SubmitButton';
import { InputLabel } from '../components/InputFields/InputLabel';
import { TextStyledH1 } from '../components/TextStyledH1';
import { InputForm } from '../components/InputFields/InputForm';
import {
  StatusWrapper,
  ActiveLabel,
  ActiveInput,
  ProgressLabel,
  ProgressInput,
  CompletedLabel,
  CompletedInput
} from '../components/InputFields/StatusRadioButtons';
import {
  PriorityWrapper,
  NormalLabel,
  NormalInput,
  MediumLabel,
  MediumInput,
  HighLabel,
  HighInput
} from '../components/InputFields/PriorityRadioButtons';

export default function NewTicket(props) {
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
      <StatusWrapper onChange={event => setStatus(event.target.value)}>
        <ActiveLabel>
          <ActiveInput type="radio" name="status" value="active" checked required />
          Active
        </ActiveLabel>
        <ProgressLabel>
          <ProgressInput type="radio" name="status" value="inprogress" required />
          In progress
        </ProgressLabel>
        <CompletedLabel>
          <CompletedInput type="radio" name="status" value="completed" required />
          Completed
        </CompletedLabel>
      </StatusWrapper>
      <InputLabel>Priority</InputLabel>
      <PriorityWrapper onChange={event => setPriority(event.target.value)}>
        <NormalLabel>
          <NormalInput type="radio" name="progress" value="normal" checked required />
          Normal
        </NormalLabel>
        <MediumLabel>
          <MediumInput type="radio" name="progress" value="medium" required />
          Medium
        </MediumLabel>
        <HighLabel>
          <HighInput type="radio" name="progress" value="high" required />
          High
        </HighLabel>
      </PriorityWrapper>
      <InputLabel>Priority</InputLabel>
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

NewTicket.propTypes = {
  value: PropTypes.string
};
