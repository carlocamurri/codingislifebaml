import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const SmallGraph = ({ text, text2, text3 }) => (
  <Content>
    <div style={{ marginBottom: '2rem' }}>
      <Text center bold size="s" color="white">
        {text}
      </Text>
    </div>
    <Text center bold size="s" color="white">
      {text2}
    </Text>
    <Text center bold size="l" color="rgb(255,175, 0)">
      {text3}
    </Text>
  </Content>
);

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #d4d4d4;
`;

export default SmallGraph;
