import React from 'react';
import styled from '@emotion/styled';
import search from '../../assets/icons/search.svg';

const Button = styled.button`
  width: 33px;
  height: 33px;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border-radius: 5px;
  &:hover,
  &:focus {
    transition: 0.4s;
    border: 1px solid ${props => props.theme.colors.tertiary};
    transition: 0.2s;
    box-shadow: 2px 2px 2px #000000;
  }
`;

const SearchButton = () => {
  return (
    <Button>
      <img alt="searchbutton" src={search} />
    </Button>
  );
};

export default SearchButton;
