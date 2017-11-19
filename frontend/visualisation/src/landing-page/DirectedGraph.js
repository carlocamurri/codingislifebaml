import React, { Component } from 'react';
import styled from 'styled-components';
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch/dom';

import MainContent from '../components/MainContent';
import Oval from '../components/Oval';
import Text from '../components/Text';

const data = [
  {
    id: 1,
    name: 'Patryk',
    phone: '555 555 555'
  },
  {
    id: 2,
    name: 'Peter',
    phone: '444 444 444'
  },
  {
    id: 3,
    name: 'Carlo',
    phone: '333 333 333'
  }
];

class DirectedGrap extends Component {
  constructor() {
    super();
    this.state = {
      search: 'Product'
    };
  }

  updateSearch = event => {
    console.log(event);
  };

  render() {
    const listNames = data.map(items => (
      <Text size="xs" bold key={items.id}>
        {items.name}
      </Text>
    ));
    return (
      <MainContent>
        <ContentBlock>
          <OvalContainer>
            <Oval />
          </OvalContainer>
          <TextBlock>
            <input
              type="text"
              value={this.state.search}
              onChange={this.updateSearch}
            />
            <ul>{listNames}</ul>
          </TextBlock>
          <GraphContent />
        </ContentBlock>
      </MainContent>
    );
  }
}

const OvalContainer = styled.div`
  display: flex;
  width: 100%;
`;

const TextBlock = styled.div`
  display: flex;
  padding-bottom: 5rem;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
`;

const ContentBlock = styled.div`
  height: 35rem;
  position: relative;
`;

const GraphContent = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ededed;
`;
export default DirectedGrap;
