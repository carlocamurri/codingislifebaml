import React from 'react';
import styled from 'styled-components';

import ArrowDownIcon from './ArrowDownIcon';

const ScrollIndicator = () => (
  <Container>
    <ArrowDownIcon />
  </Container>
);

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  padding: 0.5rem 0rem;
  height: 1.8rem;
  width: 1.4rem;
  border: 2px solid rgb(55, 52, 65);
  border-radius: 30px;
  cursor: pointer;
`;

export default ScrollIndicator;
