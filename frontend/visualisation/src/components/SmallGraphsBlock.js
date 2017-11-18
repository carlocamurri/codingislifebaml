import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const SmallGraphsBlock = () => (
  <Content>
    <Text>SmallGraphsBlock</Text>
  </Content>
);

const Content = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: yellow;
`;

export default SmallGraphsBlock;
