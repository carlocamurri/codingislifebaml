import React, { Component } from 'react';
import styled from 'styled-components';

import Text from '../components/Text';
import ScrollIndicator from '../components/ScrollIndicator';

class ScrollBlock extends Component {
  scrollToBottom() {
    window.scrollTo({
      top: 1400,
      behavior: 'smooth'
    });
  }
  render() {
    return (
      <Container>
        <ScrollContainer onClick={this.scrollToBottom}>
          <StyledText color="rgb(55, 52, 65)">Read more</StyledText>
          <ScrollIndicator />
        </ScrollContainer>
      </Container>
    );
  }
}

const StyledText = styled(Text)`margin-bottom: 0.5rem;`;

const ScrollContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;

  /* Fade in animation when content loads */

  opacity: 0;
  -webkit-animation: fadein ease-in 1s; /* Safari, Chrome */
  -moz-animation: fadein ease-in 1s; /* Firefox */
  -ms-animation: fadein ease-in 1s; /* Internet Explorer */
  -o-animation: fadein ease-in 1s; /* Opera */
  animation: fadein ease-in 1s;

  animation-fill-mode: forwards;
  animation-duration: 1.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Container = styled.div`padding: 1.5rem 0rem;`;

export default ScrollBlock;
