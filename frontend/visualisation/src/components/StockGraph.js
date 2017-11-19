import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const StockGraph = () => (
  <Content>
    <Text>StockGraph</Text>
  </Content>
);

const Content = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #ededed;

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    flex: 1;
  }
`;

export default StockGraph;
