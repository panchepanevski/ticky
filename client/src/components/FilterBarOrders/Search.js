import React from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  grid-area: 1 / 2 / 1 / 3;
  align-self: center;
`;

const Input = styled.input`
  width: 100%;
  height: 33px;
  padding: 10px;
  background-color: transparent;
  box-shadow: 2px 2px 2px #000000;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  outline: none;
  &:hover,
  &:focus {
    transition: 0.4s;
    border: 1px solid ${props => props.theme.colors.tertiary};
    transition: 0.2s;
  }
`;

function upperCaseFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Search({ value, onChange }) {
  const [searchOrders, setSearchOrders] = React.useState(value);

  function handleSubmit(event) {
    event.preventDefault();
    onChange(searchOrders);
  }

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(searchOrders);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchOrders]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        autoFocus
        placeholder="Search orders by typing here"
        value={searchOrders}
        onChange={event => {
          const newSearchValue = upperCaseFirstChar(event.target.value);
          setSearchOrders(newSearchValue);
        }}
      />
    </Form>
  );
}
