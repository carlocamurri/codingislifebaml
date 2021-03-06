import React from 'react';
import styled from 'styled-components';

import StockGraph from '../components/StockGraph';
import SmallGraph from '../components/SmallGraph';
import MainContent from '../components/MainContent';

const Header = () => (
  <MainContent>
    <HeaderContent>
      <StockGraph />
      <SmallGraphsBlock>
        <SmallGraph
          text="Cards Against Humanity buys piece of the U.S. border so Trump can't
          build his wall"
          text2="BREAKING: China May Cut Off Cheap Power To Bitcoin Miners?"
        />
        <SmallGraph text="Daily Sentiment Score" text3="0.54" />
      </SmallGraphsBlock>
    </HeaderContent>
  </MainContent>
);

const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  height: 36rem;
  width: 100%;
  background-color: #d1d1d1;

  @media only screen and (min-width: 320px) and (max-width: 640px) {
    flex-direction: column;
    height: 55rem;
  }
`;

const SmallGraphsBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
export default Header;
