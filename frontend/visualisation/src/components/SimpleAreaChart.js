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

const date = '2016-11-01T04:00:00.000Z';

console.log(moment(date).format('YYYY-MMM'));

const data = [
  { date: '2016-11', rate: 4000 },
  { date: '2016-12', rate: 3500 },
  { date: '2017-01', rate: 2000 },
  { date: '2017-03', rate: 3490 }
];

class SimpleAreaChart extends Component {
  render() {
    return (
      <div>
        <Media query="(max-width: 1135px)">
          {matches =>
            matches ? (
              <LineChart
                width={400}
                height={300}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line
                  connectNulls={true}
                  type="monotone"
                  dataKey="rate"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </LineChart>
            ) : (
              <LineChart
                width={750}
                height={300}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line
                  connectNulls={true}
                  type="monotone"
                  dataKey="rate"
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
