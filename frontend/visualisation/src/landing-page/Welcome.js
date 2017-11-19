import React from 'react';
import styled from 'styled-components';

import StockImage from '../assets/images/rawpixel-com.png';
import MainContent from '../components/MainContent';
import Text from '../components/Text';

const Welcome = () => (
  <MainContent>
    <HeaderImage>
      <LogoContainer>
        <Text bold size="l" color="white">
          Tradeopian
        </Text>
      </LogoContainer>
      <Description>
        <Text bold size="m" color="white">
          Smart tools<br />
          for smart people
        </Text>
      </Description>
    </HeaderImage>
  </MainContent>
);

const Description = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    top: 1rem;
    left: 1rem;
  }
`;

const HeaderImage = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  height: 36rem;
  background-image: url(${StockImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    height: 70vh;
  }
`;

export default Welcome;
