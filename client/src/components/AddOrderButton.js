import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import addOrderButtonIcon from '../assets/icons/addOrderButtonIcon.svg';

const ButtonWrapper = styled.div`
  grid-column: 4 / 5;
`;

export default function AddOrderButton() {
  return (
    <ButtonWrapper>
      <Button>
        <img alt="addTicket" src={addOrderButtonIcon} />
      </Button>
    </ButtonWrapper>
  );
}
