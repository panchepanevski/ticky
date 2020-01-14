import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Title } from '../Ticket/Title';
import deleteIcon from '../../assets/icons/deleteIcon.svg';
import Priority from './Priority';
import ManufacturerIcon from '../../assets/icons/ManufacturerIcon';
import QuantityIcon from '../../assets/icons/QuantityIcon';
import SerialIcon from '../../assets/icons/SerialIcon';

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
  &:hover {
    color: ${props => props.theme.colors.tertiary};
  }
`;

const IconWrapper = styled.div`
  grid-row: 4 / 5;
  justify-self: center;
  align-self: center;
  cursor: pointer;
`;

const ManufacturerWrapper = styled(IconWrapper)`
  grid-column: 5 / 7;
`;

const SerialWrapper = styled(IconWrapper)`
  grid-column: 7 / 9;
`;

const QuantityWrapper = styled(IconWrapper)`
  grid-column: 9 / 11;
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

const IconsWrapper = styled.div`
  width: 24px;
  height: 24px;
  align-self: center;
  justify-self: center;
`;

const Details = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  grid-column: 1 / 11;
  grid-row: 5 / 6;
  margin: 10px 0;
  animation: fadeIn 1s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fadeIn {
    animation-name: fadeIn;
  }
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
  const [activeDetail, setActiveDetail] = React.useState(null);

  function handleClick(filter) {
    if (filter === activeDetail) {
      setActiveDetail(null);
    } else {
      setActiveDetail(filter);
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

      <DescriptionWrapper onClick={() => handleClick('description')}>
        Description &#x025BE;
      </DescriptionWrapper>
      <Details show={activeDetail === 'description'}>{description}</Details>

      <SerialWrapper onClick={() => handleClick('serial')}>
        <IconsWrapper>
          <SerialIcon />
        </IconsWrapper>
      </SerialWrapper>
      <Details show={activeDetail === 'serial'}>Serial Number: {serial}</Details>

      <ManufacturerWrapper onClick={() => handleClick('manufacturer')}>
        <IconsWrapper>
          <ManufacturerIcon />
        </IconsWrapper>
      </ManufacturerWrapper>
      <Details show={activeDetail === 'manufacturer'}>Manufacturer: {manufacturer}</Details>

      <QuantityWrapper onClick={() => handleClick('quantity')}>
        <IconsWrapper>
          <QuantityIcon />
        </IconsWrapper>
      </QuantityWrapper>
      <Details show={activeDetail === 'quantity'}>Quanitiy: {quantity}</Details>
      <BorderLine />
    </Container>
  );
}

Order.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  serial: PropTypes.string,
  manufacturer: PropTypes.string,
  quantity: PropTypes.string,
  orderedby: PropTypes.string,
  priority: PropTypes.string,
  description: PropTypes.string
};
