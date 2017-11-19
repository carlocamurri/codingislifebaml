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

const data = [
  { name: 'Page A', uv: 4000 },
  { name: 'Page B', uv: 3500 },
  { name: 'Page C', uv: 2000 },
  { name: 'Page D' },
  { name: 'Page E', uv: 1890 },
  { name: 'Page F', uv: 2390 },
  { name: 'Page G', uv: 3490 }
];

class SimpleAreaGraph extends Component {
  render() {
    return (
      <div>
        <Media query="(max-width: 1135px)">
          {matches =>
            matches ? (
              <LineChart
                width={300}
                height={200}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="name" />
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
                width={500}
                height={200}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="name" />
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

export default SimpleAreaGraph;
