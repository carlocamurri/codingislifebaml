import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const SmallGraph = () => (
  <Content>
    <Text>SmallGraph</Text>
  </Content>
);

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #d4d4d4;
`;

export default SmallGraph;
