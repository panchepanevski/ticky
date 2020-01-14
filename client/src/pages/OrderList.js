import React from 'react';
import styled from '@emotion/styled';
import Order from '../components/Order/Order';
import Header from '../components/Header/Header';
import AddOrderButton from '../components/Header/AddOrderButton';
import BackMainButton from '../components/Header/BackMainButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 1s;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInUp {
    animation-name: fadeInUp;
  }
`;

export default function OrderList() {
  const [orders, setOrders] = React.useState([]);

  async function fetchOrders() {
    const response = await fetch('/api/orders');
    const newOrders = await response.json();
    setOrders(newOrders);
  }

  React.useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Header>
        <AddOrderButton />
        <BackMainButton />
      </Header>
      <Container>
        {orders.map(order => (
          <Order key={order.id} {...order} />
        ))}
      </Container>
    </>
  );
}
