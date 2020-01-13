import React from 'react';
import styled from '@emotion/styled';
import search from '../../assets/icons/search.svg';

const Button = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
`;

const SearchButton = () => {
  return (
    <Button>
      <img alt="searchbutton" src={search} />
    </Button>
  );
};

export default SearchButton;
