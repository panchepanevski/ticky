import React from 'react';
import styled from '@emotion/styled';
import Order from '../components/Order/Order';
import PageHeader from '../components/Header/PageHeader';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function OrderList() {
  const [orders, setOrders] = React.useState([]);

  async function fetchOrders() {
    const response = await fetch('http://localhost:8080/orders');
    const newOrders = await response.json();
    setOrders(newOrders);
  }

  React.useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <PageHeader />
      <Container>
        {orders.map(order => (
          <Order key={order.id} {...order} />
        ))}
      </Container>
    </>
  );
}
