import React, { Component } from 'react';
import styled from 'styled-components';

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
      search: ''
    };
  }

  updateSearch = event => {
    this.setState({ search: event.target.value.substr(0, 20) });
  };

  render() {
    //TODO: leave this code - filter data
    // let filteredData = data.filter(item => {
    //   return (
    //     item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    //   );
    // });

    let listNames = data.map(item => {
      if (this.state.search.toLowerCase() === item.name.toLowerCase())
        return item.name;
    });

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
              onChange={this.updateSearch.bind(this)}
            />
            <ul>
              <Text bold size="s">
                {listNames}
              </Text>
            </ul>
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
