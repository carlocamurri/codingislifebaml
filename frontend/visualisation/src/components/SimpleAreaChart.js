import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import Media from 'react-media';
import moment from 'moment';
import styled from 'styled-components';

const date = '2016-11-01T04:00:00.000Z';
console.log(moment(date).format('YYYY-MMM'));

const ButtonBase = styled.button`
  color: rgb(55, 52, 65);
  font-size: 1em;
  border: none;
  border-bottom: 4px solid rgb(213, 210, 210);
  background-color: rgba(213, 210, 210, 0.4);
  outline: 0;
  cursor: pointer;
  padding: 1rem 4.5rem;
  margin-bottom: 0.5rem;
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    background-color: rgba(213, 210, 210, 0.3);
  }

  &:active {
    border-bottom: 4px solid transparent;
    transform: translate3d(0, 4px, 0);
  }
`;

class SimpleAreaChart extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getRandomArbitrary = (min, max) => {
    return this.setState({
      data: [
        { date: 'Page A', uv: Math.random() * (max - min) + min },
        { date: 'Page B', uv: Math.random() * (max - min) + min },
        { date: 'Page C', uv: Math.random() * (max - min) + min },
        { date: 'Page D' },
        { date: 'Page E', uv: Math.random() * (max - min) + min },
        { date: 'Page F', uv: Math.random() * (max - min) + min },
        { date: 'Page G', uv: Math.random() * (max - min) + min }
      ]
    });
  };
  render() {
    return (
      <div>
        <ButtonBase onClick={() => this.getRandomArbitrary(0, 4000)}>
          Oil market
        </ButtonBase>
        <Media query="(max-width: 1135px)">
          {matches =>
            matches ? (
              <LineChart
                width={400}
                height={300}
                data={this.state.data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line
                  connectNulls={true}
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </LineChart>
            ) : (
              <LineChart
                width={750}
                height={300}
                data={this.state.data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line
                  connectNulls={true}
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </LineChart>
            )}
        </Media>
      </div>
    );
  }
}

export default SimpleAreaChart;
