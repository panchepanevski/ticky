import React from 'react';
import styled from '@emotion/styled';
import { Title } from '../Ticket/Title';
import deleteIcon from '../../assets/icons/deleteIcon.svg';
import Priority from './Priority';
import serialIcon from '../../assets/icons/serialIcon.svg';
import manufacturerIcon from '../../assets/icons/manufacturerIcon.svg';
import quantityIcon from '../../assets/icons/quantityIcon.svg';

const Container = styled.div`
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  grid-template-rows: auto auto auto auto auto;
  justify-self: center;
  width: 98%;
  height: auto;
  background-color: ${props => props.theme.colors.elements_bg};
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.15);
`;

const NameWrapper = styled.div`
  grid-column: 1 / 10;
  grid-row: 1 / 2;
  margin: 5px 0;
`;

const OrderedByWrapper = styled.div`
  grid-column: 1 / 10;
  grid-row: 2 / 3;
`;

const PriorityWrapper = styled.div`
  grid-column: 1 / 11;
  grid-row: 3 / 4;
  margin: 5px 0;
`;

const DescriptionWrapper = styled.div`
  grid-column: 1 / 6;
  grid-row: 4 / 5;
  cursor: pointer;
  margin: 15px 0;
`;

const ManufacturerWrapper = styled.div`
  grid-column: 5 / 7;
  grid-row: 4 / 5;
  justify-self: center;
  align-self: center;
  cursor: pointer;
`;

const SerialWrapper = styled.div`
  grid-column: 7 / 9;
  grid-row: 4 / 5;
  justify-self: center;
  align-self: center;
  cursor: pointer;
`;

const QuantityWrapper = styled.div`
  grid-column: 9 / 11;
  grid-row: 4 / 5;
  justify-self: center;
  align-self: center;
  cursor: pointer;
`;

const BorderLine = styled.div`
  grid-column: 1 / 11;
  grid-row: 4 / 5;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  margin-top: 30px;
  margin-bottom: 5px;
`;

const DeleteIcon = styled.img`
  grid-column: 10 / 11;
  grid-row: 1 / 2;
  justify-self: center;
  width: 24px;
  height: 24px;
  margin: 20px 0;
`;

const IconsWrapper = styled.img`
  width: 24px;
  height: 24px;
  align-self: center;
  justify-self: center;
`;

const FullDescription = styled.div`
  display: ${props => (props.detailsClick ? 'block' : 'none')};
  grid-column: 1 / 11;
  grid-row: 5 / 6;
  margin: 10px 0;
`;

const FullSerial = styled.div`
  display: ${props => (props.serialClick ? 'block' : 'none')};
  grid-column: 1 / 11;
  grid-row: 5 / 6;
  margin: 10px 0;
`;

const FullManufacturer = styled.div`
  display: ${props => (props.manufacturerClick ? 'block' : 'none')};
  grid-column: 1 / 11;
  grid-row: 5 / 6;
  margin: 10px 0;
`;

const FullQuantity = styled.div`
  display: ${props => (props.quantityClick ? 'block' : 'none')};
  grid-column: 1 / 11;
  grid-row: 5 / 6;
  margin: 10px 0;
`;

export default function Order({
  id,
  name,
  serial,
  manufacturer,
  quantity,
  orderedby,
  priority,
  description
}) {
  const [detailsClick, setDetailsClick] = React.useState(false);
  const [serialClick, setSerialClick] = React.useState(false);
  const [manufacturerClick, setManufacturerClick] = React.useState(false);
  const [quantityClick, setQuantityClick] = React.useState(false);

  function handleClick(filter) {
    if (filter === 'descriptionClick') {
      setDetailsClick(!detailsClick);
      setSerialClick(false);
      setManufacturerClick(false);
      setQuantityClick(false);
    } else if (filter === 'serialClick') {
      setDetailsClick(false);
      setSerialClick(!serialClick);
      setManufacturerClick(false);
      setQuantityClick(false);
    } else if (filter === 'manufacturerClick') {
      setDetailsClick(false);
      setSerialClick(false);
      setManufacturerClick(!manufacturerClick);
      setQuantityClick(false);
    } else if (filter === 'quantityClick') {
      setDetailsClick(false);
      setSerialClick(false);
      setManufacturerClick(false);
      setQuantityClick(!quantityClick);
    }
  }

  return (
    <Container>
      <NameWrapper>
        <Title>{name}</Title>
      </NameWrapper>
      <DeleteIcon src={deleteIcon}></DeleteIcon>
      <OrderedByWrapper>
        <p>
          <strong>Ordered by:</strong> {orderedby}
        </p>
      </OrderedByWrapper>
      <PriorityWrapper>
        Priority:
        <Priority orderId={id} value={priority} />
      </PriorityWrapper>

      <DescriptionWrapper onClick={() => handleClick('descriptionClick')}>
        Description &#x025BE;
      </DescriptionWrapper>
      <FullDescription detailsClick={detailsClick}>{description}</FullDescription>

      <SerialWrapper onClick={() => handleClick('serialClick')}>
        <IconsWrapper src={serialIcon}></IconsWrapper>
      </SerialWrapper>
      <FullSerial serialClick={serialClick}>Serial Number: {serial}</FullSerial>

      <ManufacturerWrapper onClick={() => handleClick('manufacturerClick')}>
        <IconsWrapper src={manufacturerIcon}></IconsWrapper>
      </ManufacturerWrapper>
      <FullManufacturer manufacturerClick={manufacturerClick}>
        Manufacturer: {manufacturer}
      </FullManufacturer>

      <QuantityWrapper onClick={() => handleClick('quantityClick')}>
        <IconsWrapper src={quantityIcon}></IconsWrapper>
      </QuantityWrapper>
      <FullQuantity quantityClick={quantityClick}>Quanitiy: {quantity}</FullQuantity>
      <BorderLine />
    </Container>
  );
}
