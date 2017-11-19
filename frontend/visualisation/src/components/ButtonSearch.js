import React from 'react';
import styled from 'styled-components';

const ButtonSearch = ({ text }) => <ButtonBase>{text}</ButtonBase>;

const ButtonBase = styled.button`
  color: rgb(55, 52, 65);
  font-size: 1em;
  border: none;
  border-bottom: 4px solid rgb(213, 210, 210);
  background-color: rgba(213, 210, 210, 0.4);
  outline: 0;
  cursor: pointer;
  padding: 1rem 4.5rem;
  margin-bottom: 0.5rem;
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    background-color: rgba(213, 210, 210, 0.3);
  }

  &:active {
    border-bottom: 4px solid transparent;
    transform: translate3d(0, 4px, 0);
  }
`;

export default ButtonSearch;
