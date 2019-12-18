import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import addTicketButtonIcon from '../assets/icons/addTicketButtonIcon.svg';

const ButtonWrapper = styled.div`
  grid-column: 5 / 6;
`;

export default function AddTicketButton() {
  return (
    <ButtonWrapper>
      <Button>
        <img alt="addTicket" src={addTicketButtonIcon} />
      </Button>
    </ButtonWrapper>
  );
}
