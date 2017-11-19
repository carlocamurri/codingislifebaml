import React, { Component } from 'react';
import styled from 'styled-components';

import MainContent from '../components/MainContent';
import Oval from '../components/Oval';
import Text from '../components/Text';
import Input from '../components/Input';
import ButtonSearch from '../components/ButtonSearch';

import TopicGraph from '../components/TopicGraph';

const data = [
  {
    id: 1,
    name: 'Bitcoin'
  },
  {
    id: 2,
    name: 'IOTA'
  },
  {
    id: 3,
    name: 'Ethereum'
  },
  {
    id: 4,
    name: 'Blockchain'
  },
  {
    id: 5,
    name: 'NVIDIA'
  },
  {
    id: 6,
    name: 'GPU'
  },
  {
    id: 7,
    name: 'Cryptocurrency'
  },
  {
    id: 8,
    name: 'Mining'
  },
  {
    id: 9,
    name: 'CPU'
  },
  {
    id: 10,
    name: 'Apple'
  },
  {
    id: 11,
    name: 'Bank of America'
  },
  {
    id: 12,
    name: 'ARM'
  },
  {
    id: 13,
    name: 'Intel'
  },
  {
    id: 14,
    name: 'Samsung'
  },
  {
    id: 15,
    name: 'Dollars'
  },
  {
    id: 16,
    name: 'Pound Sterling'
  },
  {
    id: 17,
    name: 'Euro'
  }
];

class DirectedGraph extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      index: 0
    };
  }

  updateSearch = event => {
    this.setState({ search: event.target.value.substr(0, 20) });
  };

  render() {
    let filteredData = data.filter(item => {
      return (
        item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    const listNames = filteredData.map(item => (
      <ButtonSearch key={item.id} text={item.name} />
    ));
    const firstThreeItems = listNames.slice(0, 3);

    return (
      <MainContent>
        <ContentBlock>
          <OvalContainer>
            <Oval />
          </OvalContainer>
          <TextBlock>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Input
                placeholder="Search"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
              />
              <ul>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {firstThreeItems}
                </div>
              </ul>
            </div>
          </TextBlock>
          <GraphContent>
            <TopicGraph />
          </GraphContent>
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
export default DirectedGraph;
