import React from 'react';
import styled from '@emotion/styled';
import Order from '../components/Order/Order';
import PageHeader from '../components/Header/PageHeader';
import Search from '../components/FilterBarOrders/Search';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <PageHeader />
      {/* <Search onChange={} /> */}
      <Container>
        {orders.map(order => (
          <Order key={order.id} {...order} />
        ))}
      </Container>
    </>
  );
}
