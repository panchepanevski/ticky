import React from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15px 0 0 15px;
`;

const AddTicketText = styled.h1`
  display: inline-flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  padding-top: 20px;
`;

const Label = styled.p`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  justify-self: start;
  font-size: 12px;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #000000;
`;

const Name = styled.input`
  width: 95%;
  height: 33px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px 5px 5px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  outline: none;
  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid ${props => props.theme.colors.thertiary};
    transition: 0.2s;
  }
`;

const TimeDate = styled.input`
  width: 95%;
  height: 33px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px 5px 5px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  outline: none;
  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid ${props => props.theme.colors.thertiary};
    transition: 0.2s;
  }
`;

const AssignedBy = styled.input`
  width: 95%;
  height: 33px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px 5px 5px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  outline: none;
  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid ${props => props.theme.colors.thertiary};
    transition: 0.2s;
  }
`;

const Location = styled.select`
  width: 95%;
  height: 33px;
  padding-left: 10px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px 5px 5px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  outline: none;
  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid ${props => props.theme.colors.thertiary};
    transition: 0.2s;
  }
`;

const StatusInput = styled.fieldset`
  border: none;
  background-color: transparent;
`;

const PriorityInput = styled.fieldset`
  border: none;
  background-color: transparent;
`;

const LabelRadio = styled.label`
  margin-right: 30px;
  font-size: 14px;
  text-shadow: 1px 1px 1px #000000;
  color: ${props => props.theme.colors.primary};
`;

const Description = styled.textarea`
  width: 95%;
  padding-left: 10px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px 5px 5px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  outline: none;
  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid ${props => props.theme.colors.thertiary};
    transition: 0.2s;
  }
`;

const SubmitButton = styled.button`
  align-self: center;
  width: 35%;
  height: 33px;
  margin: 30px 0 30px 0;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px 5px 5px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  text-transform: uppercase;
  outline: none;

  &:hover,
  &:active {
    transition: 0.5s;
    border: 1px solid ${props => props.theme.colors.thertiary};
    transition: 0.2s;
  }
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
    <Form onSubmit={handleSubmit}>
      <AddTicketText>Add Ticket</AddTicketText>
      <Label>Ticket name</Label>
      <Name type="text" value={name} onChange={event => setName(event.target.value)} />
      <Label>Date and Time</Label>
      <TimeDate
        type="datetime"
        value={timedate}
        onChange={event => setTimedate(event.target.value)}
      />
      <Label>Assigned by</Label>
      <AssignedBy
        type="text"
        value={assigned}
        onChange={event => setAssigned(event.target.value)}
      />
      <Label>Location</Label>
      <Location value={location} onChange={event => setLocation(event.target.value)}>
        <option value="select">Select Location</option>
        <option value="east">East Building</option>
        <option value="west">West Building</option>
        <option value="south">South Building</option>
        <option value="north">North Building</option>
      </Location>
      <Label>Status</Label>
      <StatusInput onChange={event => setStatus(event.target.value)}>
        <LabelRadio>
          <input type="radio" name="status" value="active" />
          Active
        </LabelRadio>
        <LabelRadio>
          <input type="radio" name="status" value="inprogress" />
          In progress
        </LabelRadio>
        <LabelRadio>
          <input type="radio" name="status" value="completed" />
          Completed
        </LabelRadio>
      </StatusInput>
      <Label>Priority</Label>
      <PriorityInput onChange={event => setPriority(event.target.value)}>
        <LabelRadio>
          <input type="radio" name="priority" value="normal" />
          Normal
        </LabelRadio>
        <LabelRadio>
          <input type="radio" name="priority" value="medium" />
          Medium
        </LabelRadio>
        <LabelRadio>
          <input type="radio" name="priority" value="high" />
          High
        </LabelRadio>
      </PriorityInput>
      <Label>Description</Label>
      <Description
        type="text"
        rows="10"
        placeholder="Add description for your ticket"
        value={details}
        onChange={event => setDetails(event.target.value)}
      />
      <SubmitButton>Add Ticket</SubmitButton>
    </Form>
  );
}
